import React, {Fragment} from 'react'
import {default as NextLink} from 'next/link'
import {client, linkResolver, hrefResolver} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Post({articles}) {
  console.log(articles)
  return (
    <Fragment>
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <h2>
              <NextLink href={hrefResolver(article)} as={linkResolver(article)}>
                <a>{RichText.asText(article.data.title)}</a>
              </NextLink>
            </h2>
            <p>{RichText.asText(article.data.excerpt)}</p>
            {article.tags.map((tag, index) => {
              return (
                <NextLink
                  href={hrefResolver({type: 'tag', uid: tag})}
                  as={linkResolver({type: 'tag', uid: tag})}
                  key={index}>
                  <a style={{margin: '0 0.5rem'}}>{tag}</a>
                </NextLink>
              )
            })}
          </div>
        )
      })}
    </Fragment>
  )
}

export async function getStaticProps({params}) {
  const {category} = params
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )

  // filter articles based on the category slug
  const articles = results.filter(({data}) => {
    const categories = data.categories.map(({slug}) => slug)
    return categories.includes(category)
  })

  return {
    props: {
      articles,
    },
  }
}

export async function getStaticPaths() {
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )

  const categories = results.reduce(
    (acc, curr) => acc.concat(curr.data.categories),
    []
  )

  const paths = categories.map(({slug}) => ({
    params: {
      category: slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

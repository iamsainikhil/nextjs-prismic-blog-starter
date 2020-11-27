import React, {Fragment} from 'react'
import {default as NextLink} from 'next/link'
import {client, linkResolver, hrefResolver} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Post({articles}) {
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
  const {tag} = params
  const {results} = await client.query(
    Prismic.Predicates.any('document.tags', [tag])
  )
  return {
    props: {
      articles: results,
    },
  }
}

export async function getStaticPaths() {
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )

  const tags = results.reduce((acc, curr) => acc.concat(curr.tags), [])

  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

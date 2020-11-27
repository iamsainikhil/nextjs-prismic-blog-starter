/** @jsxRuntime classic */
/** @jsx jsx */
import React, {Fragment} from 'react'
import {jsx} from 'theme-ui'
import Head from '../components/Head'
import {default as NextLink} from 'next/link'
import Prismic from 'prismic-javascript'
import {RichText} from 'prismic-reactjs'
import {client, linkResolver, hrefResolver} from '../prismic-configuration'
import Layout from './../components/Layout'
import Listing from '../components/Listing'

export default function Home(props) {
  console.log(props)
  props.articles.results.forEach((article) => {
    console.dir(article.data)
  })

  return (
    <Fragment>
      <Head title='Blog | NextJS Prismic Blog Starter'>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Listing articles={props.articles.results} />
        {/* {props.articles.results.map((article, index) => {
            return (
              <div key={index}>
                <h2>
                  <NextLink
                    href={hrefResolver(article)}
                    as={linkResolver(article)}>
                    <a>{RichText.asText(article.data.title)}</a>
                  </NextLink>
                </h2>
                <p>{RichText.asText(article.data.excerpt)}</p>
                {article.tags.map((tag, index) => {
                  return (
                    <div key={index}>
                      Tags:
                      <NextLink
                        href={hrefResolver({type: 'tag', uid: tag})}
                        as={linkResolver({type: 'tag', uid: tag})}>
                        <a style={{margin: '0 0.5rem'}}>{tag}</a>
                      </NextLink>
                    </div>
                  )
                })}
                <br />
                {article.data.categories.map(({slug}, index) => {
                  return (
                    <div key={index}>
                      Categories:
                      <NextLink
                        href={hrefResolver({type: 'category', uid: slug})}
                        as={linkResolver({type: 'category', uid: slug})}>
                        <a style={{margin: '0 0.5rem'}}>{slug}</a>
                      </NextLink>
                    </div>
                  )
                })}
              </div>
            )
          })} */}
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps() {
  const articles = await client.query(
    Prismic.Predicates.at('document.type', 'article'),
    {orderings: '[my.article.modified desc]', pageSize: 10, page: 1}
  )
  return {
    props: {
      articles,
    },
  }
}

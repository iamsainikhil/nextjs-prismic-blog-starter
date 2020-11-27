import React, {Fragment} from 'react'
import {client} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Post({data}) {
  return (
    <Fragment>
      <article>
        <header>
          <h1>{RichText.asText(data.title)}</h1>
        </header>
        <main>
          <p>{RichText.asText(data.excerpt)}</p>
        </main>
        <footer>Created: {data.created}</footer>
      </article>
    </Fragment>
  )
}

export async function getStaticProps({params}) {
  const {uid} = params
  const {data} = await client.getByUID('article', uid)
  return {
    props: {data},
  }
}

export async function getStaticPaths() {
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )

  const paths = results.map((article) => ({
    params: {
      uid: article.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

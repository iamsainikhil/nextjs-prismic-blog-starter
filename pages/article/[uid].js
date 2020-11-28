import React, {Fragment} from 'react'
import {client} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Article({article}) {
  return <></>
}

export async function getStaticProps({params}) {
  const {uid} = params
  const {data} = await client.getByUID('article', uid)
  return {
    props: {article: data},
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

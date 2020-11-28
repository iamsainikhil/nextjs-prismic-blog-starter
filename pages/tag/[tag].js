import {client} from '../../prismic-configuration'
import Prismic from 'prismic-javascript'
import Layout from './../../components/Layout'
import Caption from './../../components/Caption'
import Listing from './../../components/Listing'

export default function Post({articles, tag}) {
  return (
    <Layout>
      <Caption name={tag} type='tag' />
      <Listing articles={articles} />
    </Layout>
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
      tag,
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

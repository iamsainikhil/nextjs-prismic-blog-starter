import {client} from '../../prismic-configuration'
import Prismic from 'prismic-javascript'
import {Layout, Caption, Listing} from './../../components'

export default function Tag({articles, tag}) {
  return (
    <Layout page='Tag' title={tag}>
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

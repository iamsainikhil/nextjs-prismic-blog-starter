import {client} from '../../prismic-configuration'
import Prismic from 'prismic-javascript'
import {Layout, Caption, Listing} from './../../components'

export default function Category({articles, category}) {
  return (
    <Layout page='Category' title={category}>
      <Caption name={category} type='category' />
      <Listing articles={articles} />
    </Layout>
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
      category,
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

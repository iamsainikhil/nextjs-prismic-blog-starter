import Prismic from 'prismic-javascript'
import {client} from '../prismic-configuration'
import {Layout, Caption, Listing} from './../components'

export default function Home(props) {
  return (
    <Layout>
      <Caption type='articles' />
      <Listing articles={props.articles.results} />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await client.query(
    Prismic.Predicates.at('document.type', 'article'),
    {orderings: '[my.article.created desc]', pageSize: 10, page: 1}
  )
  return {
    props: {
      articles,
    },
  }
}

import Prismic from 'prismic-javascript'
import {client} from '../prismic-configuration'
import Layout from './../components/Layout'
import Listing from '../components/Listing'
import Caption from '../components/Caption'

export default function Home(props) {
  // console.log(props)
  console.log(props.articles.results)

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
    {orderings: '[my.article.modified desc]', pageSize: 10, page: 1}
  )
  return {
    props: {
      articles,
    },
  }
}

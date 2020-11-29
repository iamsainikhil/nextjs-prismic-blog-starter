/** @jsxRuntime classic */
/** @jsx jsx */
import {Fragment, useState} from 'react'
import {jsx, Styled} from 'theme-ui'
import {client} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import {useRouter} from 'next/router'
import {
  Layout,
  SliceZone,
  Chip,
  Author,
  Share,
  DisqusComments,
  RelatedArticles,
} from '../../components'
import {FiClock} from 'react-icons/fi'
import formatDate from '../../utils/formatDate'
import Snakke from 'react-snakke'
import {Banner} from '../../slices'

export default function Article({uid, tags, article, author, articles}) {
  const router = useRouter()
  const [showComments, setShowComments] = useState(false)
  const toggleComments = () => {
    setShowComments(!showComments)
  }
  return (
    <Fragment>
      <Snakke
        color='#484848'
        top='0px'
        height='5px'
        opacity='1'
        zIndex='10'
        shadow={false}
      />
      <Layout title={RichText.asText(article.title)}>
        <Styled.h1 sx={{textAlign: 'center', mb: 3}}>
          {RichText.asText(article.title)}
        </Styled.h1>
        <p sx={{fontWeight: 'bold', my: 0, pt: 0, textAlign: 'center'}}>
          <Styled.em
            title={formatDate(article.created)}
            aria-label={formatDate(article.created)}>
            {formatDate(article.created)}
          </Styled.em>
          <Styled.em
            sx={{mx: 4}}
            title='Time to read the article'
            aria-label='Time to read the article'>
            <FiClock style={{marginBottom: '-0.15rem'}} />
            &nbsp;{article.read_time}&nbsp;min read
          </Styled.em>
        </p>

        {/* categories */}
        <div
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}>
          {article.categories.map(({slug}, index) => {
            return (
              slug && (
                <Chip name={slug} slug={slug} type='category' key={index} />
              )
            )
          })}
        </div>
        <Styled.p sx={{my: 4}}>{RichText.asText(article.excerpt)}</Styled.p>

        <Banner image={article.article_image} />

        {/* slices */}
        <SliceZone slices={article.body} />

        <Styled.em sx={{color: 'gray'}}>
          This article was last updated on {formatDate(article.modified)}
        </Styled.em>

        {/* tags */}
        <div
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            my: 2,
          }}>
          {tags.map((tag, index) => {
            return <Chip name={tag} slug={tag} type='tag' key={index} />
          })}
        </div>

        {/* Share */}
        <Share
          articleURL={router.asPath}
          articleName={RichText.asText(article.title)}
        />

        {author && <Author author={author} />}

        <RelatedArticles
          uid={uid}
          categories={article.categories}
          tags={tags}
          related={articles}
        />

        <p style={{textAlign: 'center'}}>
          <button
            onClick={toggleComments}
            sx={{
              margin: '1rem auto 0.5rem auto',
              py: 2,
              px: 4,
              color: 'text',
              backgroundColor: 'shade2',
              fontFamily: 'light',
              fontSize: [1, 2],
              textTransform: 'uppercase',
              letterSpacing: '2px',
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              '&:hover': {
                color: 'accent',
                backgroundColor: 'shade1',
              },
            }}>
            {showComments ? 'Hide' : 'Show'} Comments
          </button>
        </p>

        {/* Disqus comments */}
        {showComments ? (
          <div sx={{mt: 4}}>
            <DisqusComments
              slug={uid}
              title={RichText.asText(article.title)}
              pathname={router.asPath}
            />
          </div>
        ) : null}
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps({params}) {
  const {uid} = params
  const {tags, data: article} = await client.getByUID('article', uid)
  // get authorID
  const authorId = await article?.author?.id
  // fetch author data based on authorId
  const {data: author} = await client.getByID(authorId)
  const {results: articles} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )
  return {
    props: {uid, tags, article, author, articles},
  }
}

export async function getStaticPaths() {
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )

  const paths = results.map((article) => {
    return {
      params: {
        uid: article.uid,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

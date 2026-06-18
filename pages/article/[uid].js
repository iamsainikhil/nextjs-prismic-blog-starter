import {Fragment, useState} from 'react'
import {client} from '../../prismic-configuration'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import {
  Layout,
  SliceMachine,
  Chip,
  Author,
  Share,
  DisqusComments,
  RelatedArticles,
} from '../../components'
import {FiClock, FiShare2} from 'react-icons/fi'
import Snakke from 'react-snakke'
import {Banner} from '../../slices'
import formatDate from '../../utils/formatDate'
import {useRouter} from 'next/router'

export default function Article({uid, tags, article, author, articles}) {
  const {asPath: URL} = useRouter()
  const [showComments, setShowComments] = useState(false)
  const [showShareIcons, setShowShareIcons] = useState(false)
  const toggleShareIcons = () => {
    setShowShareIcons(!showShareIcons)
  }
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
      <Layout
        page='Article'
        title={RichText.asText(article.title)}
        description={RichText.asText(article.excerpt)}
        image={article.article_image.url}
        pathUrl={URL}>
        <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>
          {RichText.asText(article.title)}
        </h1>
        <div
          style={{
            fontWeight: 'bold',
            margin: 0,
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <em
            title={formatDate(article.created)}
            aria-label={formatDate(article.created)}>
            {formatDate(article.created)}
          </em>
          <em
            style={{margin: '0 2rem'}}
            title='Time to read the article'
            aria-label='Time to read the article'>
            <FiClock style={{marginBottom: '-0.15rem'}} />
            &nbsp;{article.read_time}&nbsp;min read
          </em>
          <p style={{margin: 0}}>
            <FiShare2
              style={{
                fontSize: '1.5rem',
                margin: '0 1rem -0.25rem',
                cursor: 'pointer',
              }}
              title={`Share ${RichText.asText(
                article.title
              )} article on different platforms.`}
              onMouseEnter={toggleShareIcons}
              onClick={toggleShareIcons}
            />
            {/* Share */}
            {showShareIcons && (
              <div
                style={{
                  position: 'absolute',
                  marginTop: '-2rem',
                  marginLeft: '2rem',
                }}
                onMouseLeave={toggleShareIcons}>
                <Share
                  articleURL={URL}
                  articleName={RichText.asText(article.title)}
                  hideShareText={true}
                />
              </div>
            )}
          </p>
        </div>

        {/* categories */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
          }}>
          {article.categories.map(({slug}, index) => {
            return (
              slug && (
                <Chip name={slug} slug={slug} type='category' key={index} />
              )
            )
          })}
        </div>

        <p
          style={{
            margin: '2rem auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {RichText.asText(article.excerpt)}
        </p>

        <Banner image={article.article_image} />

        {/* slices */}
        <SliceMachine slices={article.body} />

        <em style={{color: 'gray'}}>
          This article was last updated on {formatDate(article.modified)}
        </em>

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
        <Share articleURL={URL} articleName={RichText.asText(article.title)} />

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
              pathname={URL}
            />
          </div>
        ) : null}
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const {uid} = params
  const {ref} = previewData
  const {tags, data: article} = await client.getByUID(
    'article',
    uid,
    ref ? {ref} : null
  )
  // get authorID
  const authorId = await article?.author?.id
  // fetch author data based on authorId
  const {data: author} = await client.getByID(authorId, ref ? {ref} : null)
  const {results: articles} = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  )
  return {
    props: {uid, tags, article, author, articles, preview},
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

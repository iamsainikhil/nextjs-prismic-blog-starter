/** @jsxRuntime classic */
/** @jsx jsx */
import {Fragment, useState} from 'react'
import {jsx, Styled} from 'theme-ui'
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
        <Styled.h1 sx={{textAlign: 'center', mb: 3}}>
          {RichText.asText(article.title)}
        </Styled.h1>
        <div
          sx={{
            fontWeight: 'bold',
            my: 0,
            pt: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
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
          <p sx={{m: 0}}>
            <FiShare2
              sx={{
                fontSize: [3],
                mx: 2,
                mb: -1,
                ':hover': {cursor: 'pointer'},
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
                sx={{
                  position: 'absolute',
                  mt: '-2rem',
                  ml: '2rem',
                  '@media screen and (max-width: 40rem)': {
                    mt: '-2rem',
                    ml: '2.5rem',
                  },
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

        <Styled.p
          sx={{
            my: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {RichText.asText(article.excerpt)}
        </Styled.p>

        <Banner image={article.article_image} />

        {/* slices */}
        <SliceMachine slices={article.body} />

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

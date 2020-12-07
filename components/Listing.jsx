/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, useThemeUI} from 'theme-ui'
import PropTypes from 'prop-types'
import {default as NextLink} from 'next/link'
import {hrefResolver, linkResolver} from './../prismic-configuration'
import Image from 'next/image'
import {RichText} from 'prismic-reactjs'
import styled from '@emotion/styled'
import {FiClock} from 'react-icons/fi'
import formatDate from '../utils/formatDate'
import Chip from './Chip'
import {trackGAEvent} from '../utils/googleAnalytics'

/**
 * Truncate the excerpt text based on character count
 * @param {String} text
 */
const truncateText = (text) => {
  if (text.length > 75) {
    return text.slice(0, 75).concat('...')
  }
  return text
}

const Listing = ({articles}) => {
  const {theme} = useThemeUI()

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 325px);
    grid-template-rows: auto;
    grid-gap: 1.25rem;
    justify-content: center;
    margin: auto;
    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
    }
  `

  const ArticleCard = styled.div`
    display: grid;
    grid-template-columns: 325px;
    grid-template-rows: 200px auto;
    grid-gap: 0;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: inset -5px -5px 12px ${theme.colors.shade1},
      inset 5px 5px 12px ${theme.colors.shade2};
  `

  return (
    <GridLayout>
      {articles.map((article) => (
        <ArticleCard
          aria-label={`Read article ${article.uid}`}
          title={article.uid}
          key={article.uid}>
          <div style={{overflow: 'hidden'}}>
            <NextLink
              href={hrefResolver(article)}
              as={linkResolver(article)}
              passHref>
              <a>
                <Image
                  src={article.data.article_image.url}
                  alt={article.data.article_image.alt}
                  title={article.data.article_image.alt}
                  layout='responsive'
                  width={article.data.article_image.dimensions.width}
                  height={article.data.article_image.dimensions.height}
                  className='article-image'
                />
              </a>
            </NextLink>
          </div>
          <div
            sx={{
              px: 3,
              py: 2,

              '@media (max-width: 30rem)': {
                px: 3,
              },
            }}>
            <h2
              sx={{
                m: 0,
                pt: 0,
                minHeight: '5rem',
                fontSize: [2, 3],
                '@media (max-width: 30rem)': {
                  pt: 0,
                  height: 'auto',
                },
              }}>
              <NextLink
                href={hrefResolver(article)}
                as={linkResolver(article)}
                passHref>
                <a
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    ':hover,:focus': {
                      color: 'secondary',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() =>
                    trackGAEvent(
                      'home',
                      `clicked on ${article.uid} article title`,
                      'text click'
                    )
                  }
                  rel='noreferrer noopener'>
                  {RichText.asText(article.data.title)}
                </a>
              </NextLink>
            </h2>
            <p
              sx={{
                my: 0,
                fontSize: [1, 2],
                height: '5.5rem',
                '@media screen and (max-width: 30rem)': {
                  height: 'auto',
                },
              }}>
              {truncateText(`${RichText.asText(article.data.excerpt)}`)}&nbsp;
              <NextLink
                href={hrefResolver(article)}
                as={linkResolver(article)}
                passHref>
                <a
                  sx={{variant: 'styles.a'}}
                  aria-label={`Read the article on ${RichText.asText(
                    article.data.title
                  )}`}
                  title={`Read the article on ${RichText.asText(
                    article.data.title
                  )}`}
                  onClick={() =>
                    trackGAEvent(
                      'home',
                      `clicked on ${article.uid} read full article`,
                      'link click'
                    )
                  }
                  rel='noreferrer noopener'>
                  Read Full Article
                </a>
              </NextLink>
            </p>
            <div
              sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0 auto 0 -0.25rem',
              }}>
              {article.data.categories.map(({slug}, index) => {
                return (
                  slug && (
                    <Chip
                      name={slug}
                      slug={slug}
                      type='category'
                      page='listing'
                      key={index}
                      onClick={() =>
                        trackGAEvent('home', `clicked on ${slug}`, 'chip click')
                      }
                    />
                  )
                )
              })}
            </div>
            <p
              sx={{
                fontSize: 0,
                mb: 1,
                py: 1,
              }}>
              <em
                title={`Article posted on ${formatDate(article.data.created)}`}
                aria-label={`Article posted on ${formatDate(
                  article.data.created
                )}`}>
                {formatDate(article.data.created)}
              </em>
              <span sx={{mx: 2, fontSize: '10px'}}>|</span>
              <em
                title='Time to read the article'
                aria-label='Time to read the article'>
                <FiClock style={{marginBottom: '-0.15rem'}} />
                &nbsp;{article.data.read_time}&nbsp;min read
              </em>
            </p>
          </div>
        </ArticleCard>
      ))}
    </GridLayout>
  )
}

Listing.propTypes = {
  articles: PropTypes.array,
}

export default Listing

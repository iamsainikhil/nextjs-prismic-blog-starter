/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import {default as NextLink} from 'next/link'
import {hrefResolver, linkResolver} from './../prismic-configuration'
import {trackGAEvent} from '../utils/googleAnalytics'

/**
 * @param {String} slug (ID)
 * @param {String} type (category | tag)
 * @param {String} page (fontSize will be small on listing page compared to article page)
 */
const Chip = ({name, slug, type, page = 'article'}) => {
  return (
    <p sx={{m: 1}}>
      <NextLink
        href={hrefResolver({type, uid: slug})}
        as={linkResolver({type, uid: slug})}
        passHref>
        <a
          sx={{
            textDecoration: 'none',
            color: 'muted',
            backgroundColor: 'accent',
            fontSize: page === 'article' ? [0, 1, 2] : [0],
            py: 1,
            px: 3,
            borderRadius: '2rem',
            cursor: 'pointer',
            '&:hover': {
              color: 'accent',
              backgroundColor: 'muted',
            },
          }}
          onClick={() =>
            trackGAEvent(page, `clicked on ${name} ${type}`, 'chip click')
          }
          rel='noreferrer noopener'>
          {name}
        </a>
      </NextLink>
    </p>
  )
}

Chip.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
}

export default Chip

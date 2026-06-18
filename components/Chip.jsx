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
    <p style={{margin: '0.5rem'}}>
      <NextLink
        href={hrefResolver({type, uid: slug})}
        as={linkResolver({type, uid: slug})}
        style={{
          textDecoration: 'none',
          color: 'var(--color-muted)',
          backgroundColor: 'var(--color-accent)',
          fontSize: page === 'article' ? '0.875rem' : '0.75rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '2rem',
          cursor: 'pointer',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-accent)';
          e.currentTarget.style.backgroundColor = 'var(--color-muted)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--color-muted)';
          e.currentTarget.style.backgroundColor = 'var(--color-accent)';
        }}
        onClick={() =>
          trackGAEvent(page, `clicked on ${name} ${type}`, 'chip click')
        }
        rel='noreferrer noopener'>
        {name}
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

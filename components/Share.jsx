import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import {FiShare2} from 'react-icons/fi'
import siteUrl from '../utils/siteUrl'

const flexbox = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'start',
}

const Share = ({articleURL, articleName, hideShareText = false}) => {
  const URL = siteUrl(articleURL)
  const sharePlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${URL}`,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${articleName}&url=${URL}`,
    },
    {
      name: 'LinkedIn',
      url: `http://www.linkedin.com/shareArticle?url=${URL}`,
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${articleName} ${URL}`)}`,
    },
  ]

  return (
    <div style={{marginTop: hideShareText ? '1rem' : '2rem'}}>
      {hideShareText ? null : (
        <h3 style={{textAlign: 'center'}}>
          Share
          <FiShare2
            style={{margin: '0 1rem -0.25rem', fontSize: '1.25rem'}}
            title='Share this article on different platforms.'
          />
        </h3>
      )}
      <div style={flexbox}>
        {sharePlatforms.map((platform, index) => {
          return (
            <Icon
              name={platform.name}
              url={platform.url}
              style={{
                color: 'secondary',
                fontSize: hideShareText ? '2rem' : '2rem',
                margin: '0 1.5rem 0.5rem',
              }}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

Share.propTypes = {
  articleURL: PropTypes.string,
  articleName: PropTypes.string,
  hideShareText: PropTypes.bool,
}

export default Share

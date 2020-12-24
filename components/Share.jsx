/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
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

const Share = ({articleURL, articleName}) => {
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
    <div sx={{mt: 4}}>
      <Styled.h3 sx={{textAlign: 'center'}}>
        Share
        <FiShare2
          sx={{mx: 2, mb: -1}}
          title='Share this article on different platforms.'
        />
      </Styled.h3>
      <div sx={flexbox}>
        {sharePlatforms.map((platform, index) => {
          return (
            <Icon
              name={platform.name}
              url={platform.url}
              style={{color: 'secondary', fontSize: [3, 4, 5], mx: 3, my: 1}}
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
}

export default Share

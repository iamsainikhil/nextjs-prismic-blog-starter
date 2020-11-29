/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Image from 'next/image'
import {RichText} from 'prismic-reactjs'
import {linkResolver} from '../prismic-configuration'
import htmlSerializer from '../utils/htmlSerializer'

const flexbox = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'start',
  alignItems: 'start',
}

const grid = {
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gridTemplateRows: 'auto',
  gridGap: '1rem',
}

const Author = ({author}) => {
  return (
    <div
      sx={{
        ...grid,
        my: 4,
        p: 2,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'shade2',
        borderRadius: '1rem',
      }}>
      <Image
        src={author.avatar.url}
        alt={author.avatar.alt}
        title={author.avatar.alt}
        layout='fixed'
        width='100'
        height='100'
        className='author-avatar'
      />
      <div>
        <h3
          sx={{
            mt: 0,
            mb: -2,
          }}>
          {author.name}
        </h3>
        <RichText render={author.bio} htmlSerializer={htmlSerializer} />
        <div sx={{...flexbox, mt: -1}}>
          {author.social_links.map((platform, index) => {
            return (
              <div key={index} sx={{mx: 2, my: 1}}>
                <Icon
                  name={platform.platform_name}
                  url={platform.platform_url}
                  style={{color: 'secondary', fontSize: [2, 3, 4]}}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Author.propTypes = {
  author: PropTypes.object,
}

export default Author

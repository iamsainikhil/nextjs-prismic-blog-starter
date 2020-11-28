/** @jsxRuntime classic */
/** @jsx jsx */
import {Fragment} from 'react'
import {jsx} from 'theme-ui'
import Gist from 'react-gist'
import PropTypes from 'prop-types'

const iframeStyle = {
  minWidth: '200px',
  minHeight: '500px',
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '4px',
  overflow: 'auto',
  margin: '1rem auto',
}

/**
 * return the ID part of the URL
 * @param {*} url
 */
const getGistId = (url) => {
  return url.split('/').slice(-1).join('')
}

const Embed = ({data: {primary}}) => {
  {
    if (primary.type === 'GitHub Gist') {
      return (
        <Gist id={getGistId(primary.embed_url)} title={primary.embed_title} />
      )
    }
    return (
      <Fragment>
        <iframe
          src={primary.embed_url}
          style={iframeStyle}
          alt={primary.embed_title}></iframe>

        <p
          sx={{
            textAlign: 'center',
            margin: '0 auto',
            fontFamily: 'heading',
            fontSize: [2, 3],
          }}>
          {primary.embed_title}
        </p>
      </Fragment>
    )
  }
}

Embed.defaultProps = {
  data: {
    primary: {
      type: 'Default',
      embed_title: '',
      embed_url: '',
    },
  },
}

Embed.propTypes = {
  data: PropTypes.object,
}

export default Embed

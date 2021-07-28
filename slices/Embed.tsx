import {Fragment} from 'react'
import Gist from 'react-gist'

interface EmbedProps {
  data: {
    primary: {
      type: string
      embed_url: string
      embed_title: string
    }
  }
}


const Embed = ({data: {primary}}: EmbedProps) => {
  {
    if (primary.type === 'GitHub Gist') {
      return (
        <Gist id={getGistId(primary.embed_url)} /*title={primary.embed_title}*/ />
      )
    }
    return (
      <Fragment>
        <iframe
          src={primary.embed_url}
          style={iframeStyle}></iframe>
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

export default Embed

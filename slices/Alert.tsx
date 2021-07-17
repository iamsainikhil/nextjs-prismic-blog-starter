/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {RichText} from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

const Alert = ({data: {primary}}) => {
  return (
    <div
      sx={{
        my: 2,
        py: 2,
        px: 3,
        backgroundColor: `${primary.type}`,
        color: '#222',
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderLeftColor: `${primary.type}Border`,
        fontSize: [1, 2],
      }}>
      <RichText render={primary.content} htmlSerializer={htmlSerializer} />
    </div>
  )
}

export default Alert

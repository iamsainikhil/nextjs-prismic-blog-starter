import {RichText, RichTextBlock} from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

interface AlertProps {
  data: {
    primary: {
      type: string
      content: RichTextBlock[]
    }
  }
}

const Alert = ({data: {primary}}: AlertProps) => {
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

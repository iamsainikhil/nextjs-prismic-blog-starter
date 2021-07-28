import {RichText, RichTextBlock} from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

interface ContentProps {
  data: {
    primary: {
      type: string
      content: RichTextBlock
    }
  }
}

const Content = ({data: {primary}}: ContentProps) => {
  return (
    <div sx={{variant: 'styles', mt: 4}}>
      <RichText render={primary.content as any} htmlSerializer={htmlSerializer} />
    </div>
  )
}

export default Content

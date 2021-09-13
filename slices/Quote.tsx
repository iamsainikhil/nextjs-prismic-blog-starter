import {RichText, RichTextBlock} from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

interface QuoteProps {
  data: {
    primary: {
      type: string
      content: RichTextBlock[]
    }
  }
}

const Quote = ({data: {primary}}: QuoteProps) => {
  return (
    <blockquote sx={{variant: 'styles'}}>
      <RichText render={primary.content} htmlSerializer={htmlSerializer} />
    </blockquote>
  )
}

export default Quote

/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {RichText} from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

const Quote = ({data: {primary}}) => {
  return (
    <blockquote sx={{variant: 'styles'}}>
      <RichText render={primary.content} htmlSerializer={htmlSerializer} />
    </blockquote>
  )
}

export default Quote

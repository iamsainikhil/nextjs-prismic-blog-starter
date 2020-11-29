/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import {DiscussionEmbed} from 'disqus-react'

const DisqusComments = ({slug, title, pathname}) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_NAME
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let disqusConfig = {
    url: `https://${siteUrl}${pathname}`,
    identifier: slug,
    title: title,
  }
  return (
    <div sx={{variant: 'styles'}}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}

DisqusComments.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string,
}

export default DisqusComments

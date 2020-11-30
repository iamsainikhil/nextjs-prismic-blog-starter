/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import {DiscussionEmbed} from 'disqus-react'
import siteUrl from '../utils/siteUrl'

const DisqusComments = ({slug, title, pathname}) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_NAME
  let disqusConfig = {
    url: siteUrl(pathname),
    identifier: slug,
    title: title,
  }
  return (
    <div>
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

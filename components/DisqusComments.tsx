import {DiscussionEmbed} from 'disqus-react'

import siteUrl from '../utils/siteUrl'

interface DisqusCommentsProps {
  slug: string,
  title: string,
  pathname: string,
}

const DisqusComments = ({slug, title, pathname}: DisqusCommentsProps) => {
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

export default DisqusComments

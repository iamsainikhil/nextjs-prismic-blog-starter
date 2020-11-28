/** @jsxRuntime classic */
/** @jsx jsx */
import {useRef, useEffect} from 'react'
import {jsx} from 'theme-ui'
import {RichText} from 'prismic-reactjs'

const Alert = ({data: {primary}}) => {
  const contentRef = useRef(null)

  /**
   * there is a bug with <a> tags in HTML coming from prismic not having target attribute
   * even though set to true and open in new tab in Prismic
   * TODO: remove this temporary fix in future
   */
  useEffect(() => {
    const links = contentRef.current.querySelectorAll('a')
    // add target and rel attributes to all anchor tags
    links.forEach((link) => {
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
    })
  }, [])

  return (
    <div
      ref={contentRef}
      dangerouslySetInnerHTML={{__html: RichText.asHtml(primary.content)}}
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
      }}></div>
  )
}

export default Alert

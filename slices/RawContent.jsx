/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'

const RawContent = ({data: {primary}}) =>
  primary.content.map((block, index) => {
    switch (block.type) {
      case 'o-list-item':
        return (
          <ol key={index}>
            <li
              dangerouslySetInnerHTML={{__html: block.text}}
              sx={{variant: 'styles'}}></li>
          </ol>
        )
      case 'list-item':
        return (
          <ul key={index}>
            <li
              dangerouslySetInnerHTML={{__html: block.text}}
              sx={{variant: 'styles'}}></li>
          </ul>
        )
      default:
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{__html: block.text}}
            sx={{variant: 'styles', my: 4}}></div>
        )
    }
  })

export default RawContent

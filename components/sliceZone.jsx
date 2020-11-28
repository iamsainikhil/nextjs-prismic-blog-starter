import PropTypes from 'prop-types'
import {
  Quote,
  Content,
  RawContent,
  Code,
  Embed,
  Gallery,
  Banner,
  MetaInfo,
  Alert,
} from '../slices'

const SliceZone = ({slices}) => {
  return slices.map((slice, index) => {
    if (!slice) return null
    switch (slice.slice_type) {
      case 'content':
        if (slice.primary.type === 'Rich Text') {
          return <Content key={index} data={slice} />
        } else if (slice.primary.type === 'Raw Text') {
          return <RawContent key={index} data={slice} />
        } else {
          return <Quote key={index} data={slice} />
        }
      case 'code':
        return <Code key={index} data={slice} />
      case 'embed':
        return <Embed key={index} data={slice} />
      case 'image':
        if (slice.primary.type === 'Banner') {
          return <Banner key={index} image={slice.items[0].image} />
        } else {
          return <Gallery key={index} data={slice} />
        }
      case 'meta_information':
        return <MetaInfo key={index} meta={slice.primary} />
      case 'alert':
        return <Alert key={index} data={slice} />
      default:
        return null
    }
  })
}

SliceZone.propTypes = {
  slices: PropTypes.array,
}

export default SliceZone

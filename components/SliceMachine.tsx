import { ReactElement } from 'react'
import {
  Quote,
  Content,
  Code,
  Embed,
  Gallery,
  Banner,
  MetaInfo,
  Alert,
} from '../slices'

export interface SliceMachineProps {
  slices?: any[]
}

const SliceMachine = ({slices}: SliceMachineProps): ReactElement => {
  return (<>
    {
      slices.map((slice, index) => {
        if (!slice) return null
        switch (slice.slice_type) {
          case 'content':
            if (slice.primary.type === 'Quote') {
              return <Quote key={index} data={slice} />
            } else {
              return <Content key={index} data={slice} />
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
  </>)
}

export default SliceMachine

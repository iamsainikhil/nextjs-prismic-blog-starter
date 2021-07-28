import Image from 'next/image'
import PropTypes from 'prop-types'

import { IImage } from '../schemas'

interface BannerProps {
  image: IImage
}

const Banner = ({ image: { alt, url, dimensions } }: BannerProps) => {
  return (
    <div
      sx={{
        pb: 2,
        my: 4,
        mx: 'auto',
        borderRadius: '15px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'highlight',
        overflow: 'hidden',
      }}>

      {
        (url && dimensions?.width) ?
          (<Image
            src={url}
            alt={alt}
            title={alt}
            layout='responsive'
            width={dimensions.width}
            height={dimensions.height}
          />) : undefined
      }

      <p
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          pt: 2,
          fontFamily: 'heading',
          fontSize: [2, 3],
        }}>
        {alt}
      </p>
    </div>
  )
}

Banner.defaultProps = {
  image: {
    alt: '',
    url: '',
    dimensions: {
      width: 0,
      height: 0,
    },
  },
}

Banner.propTypes = {
  image: PropTypes.object,
}

export default Banner

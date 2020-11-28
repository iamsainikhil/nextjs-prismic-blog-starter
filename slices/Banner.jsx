/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import Image from 'next/image'
import PropTypes from 'prop-types'

const Banner = ({image: {alt, url, dimensions}}) => {
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
      <Image
        src={url}
        alt={alt}
        title={alt}
        layout='responsive'
        width={dimensions.width}
        height={dimensions.height}
      />

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

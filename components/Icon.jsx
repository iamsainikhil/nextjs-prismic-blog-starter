/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {
  GrLinkedinOption,
  GrMedium,
  GrFacebookOption,
  GrTwitter,
  GrGithub,
} from 'react-icons/gr'
import {FiCodepen} from 'react-icons/fi'
import {IoIosGlobe, IoLogoWhatsapp} from 'react-icons/io'
import PropTypes from 'prop-types'
import {trackGAEvent} from '../utils/googleAnalytics'

const Icon = ({name, url, style}) => {
  const renderIcon = () => {
    switch (name) {
      case 'Facebook':
        return (
          <GrFacebookOption
            sx={{
              ...style,
              '&:hover': {
                color: '#3b5998',
              },
            }}
          />
        )
      case 'Twitter':
        return (
          <GrTwitter
            sx={{
              ...style,
              '&:hover': {
                color: '#1da1f2',
              },
            }}
          />
        )
      case 'LinkedIn':
        return (
          <GrLinkedinOption
            sx={{
              ...style,
              '&:hover': {
                color: '#0077b5',
              },
            }}
          />
        )
      case 'Medium':
        return (
          <GrMedium
            sx={{
              ...style,
              '&:hover': {
                color: '#00ab6c',
              },
            }}
          />
        )
      case 'GitHub':
        return (
          <GrGithub
            sx={{
              ...style,
              '&:hover': {
                color: '#333',
              },
            }}
          />
        )
      case 'CodePen':
        return (
          <FiCodepen
            sx={{
              ...style,
              '&:hover': {
                color: '#ae63e4',
              },
            }}
          />
        )
      case 'Portfolio':
        return (
          <IoIosGlobe
            sx={{
              ...style,
              '&:hover': {
                color: '#fc7740',
              },
            }}
          />
        )
      case 'WhatsApp':
        return (
          <IoLogoWhatsapp
            sx={{
              ...style,
              '&:hover': {
                color: '#128c7e',
              },
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={name}
      title={name}
      onClick={() =>
        trackGAEvent('social icons', `clicked on ${name} link`, 'icon click')
      }>
      {renderIcon()}
    </a>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  style: PropTypes.object,
}

export default Icon

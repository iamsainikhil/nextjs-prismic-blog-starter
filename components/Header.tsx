import {default as NextLink} from 'next/link'
import Headroom from 'react-headroom'
import {Styled, useThemeUI} from 'theme-ui'
// import { GoSearch } from "react-icons/go"
import {FiSun, FiMoon} from 'react-icons/fi'
import {trackGAEvent} from '../utils/googleAnalytics'

const Header = () => {
  const {theme, colorMode, setColorMode} = useThemeUI()

  return (
    <Headroom disableInlineStyles upTolerance={10} downTolerance={10}>
      <header style={{background: `${theme.colors.muted}`}} className='header'>
        <div className='header-content'>
          <div>
            <Styled.h1 style={{margin: '0'}}>
              <NextLink href='/' passHref>
                <Styled.a
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'Damion',
                    letterSpacing: '0.15rem',
                  }}
                  onClick={() =>
                    trackGAEvent('logo', `clicked on site logo`, 'link click')
                  }
                  rel='noreferrer noopener'>
                  Blog
                </Styled.a>
              </NextLink>
            </Styled.h1>
          </div>
          <div className='header-links'>
            {/* <Styled.h2 style={{ margin: "0 1rem" }}>
              <Styled.a as={Link} to="/">
                Tags
              </Styled.a>
            </Styled.h2> */}
            {/* <p>
              <GoSearch
                title="Search"
                style={{
                  fontSize: "1.2rem",
                  verticalAlign: "middle",
                  marginTop: "0.2rem",
                }}
              />
            </p> */}
            <p>
              {colorMode === 'light' ? (
                <span
                  title='Switch to Dark Mode'
                  aria-label='Switch to Dark Mode'>
                  <FiSun
                    className='theme-icon'
                    onClick={() => {
                      setColorMode('dark')
                      trackGAEvent(
                        'toggle theme',
                        `enabled dark theme`,
                        'icon click'
                      )
                    }}
                  />
                </span>
              ) : (
                <span
                  title='Switch to Light Mode'
                  aria-label='Switch to Light Mode'>
                  <FiMoon
                    className='theme-icon'
                    onClick={() => {
                      setColorMode('light')
                      trackGAEvent(
                        'toggle theme',
                        `enabled light theme`,
                        'icon click'
                      )
                    }}
                  />
                </span>
              )}
            </p>
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Header

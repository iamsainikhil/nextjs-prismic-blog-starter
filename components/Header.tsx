import {default as NextLink} from 'next/link'
import Headroom from 'react-headroom'
// import { GoSearch } from "react-icons/go"
import {FiSun, FiMoon} from 'react-icons/fi'

import {useTheme} from '../utils/theme'
import {trackGAEvent} from '../utils/googleAnalytics'
import { Themed } from 'theme-ui'

const Header = () => {
  const {theme, colorMode, setColorMode} = useTheme()

  return (
    <Headroom disableInlineStyles upTolerance={10} downTolerance={10}>
      <header style={{background: `${theme.colors.muted}`}} className='header'>
        <div className='header-content'>
          <div>
            <Themed.h1 style={{margin: '0'}}>
              <NextLink href='/' passHref>
                <Themed.a
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
                </Themed.a>
              </NextLink>
            </Themed.h1>
          </div>
          <div className='header-links'>
            <Themed.h2 style={{ margin: "0 1rem" }}>
              <NextLink href='/tag' passHref>
                <Themed.a>
                  Tags
                </Themed.a>
              </NextLink>
            </Themed.h2>
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

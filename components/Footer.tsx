/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {SiNextDotJs} from 'react-icons/si'
import {FaHeart} from 'react-icons/fa'
import Icon from './Icon'
import {trackGAEvent} from '../utils/googleAnalytics'

const Footer = () => {
  return (
    <footer
      sx={{
        bg: 'muted',
      }}>
      <div className='footer'>
        {/* <div className="links-row">
          <div>
            <a
              href="https://github.com/iamsainikhil/nextjs-prismic-blog-starter"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="GitHub"
              title="GitHub"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on GitHub link in Footer`,
                  'link click'
                )
              }
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://iamsainikhil.com/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="Privacy Policy"
              title="Privacy Policy"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on Privacy Policy link in Footer`,
                  'link click'
                )
              }
            >
              Privacy Policy
            </a>
          </div>
        </div> */}

        <div
          style={{
            textAlign: 'center',
            margin: '0.25rem auto',
            wordSpacing: '0.2rem',
          }}>
          Made with{' '}
          <FaHeart
            style={{color: '#CC3D5C', marginBottom: '-0.25rem'}}
            aria-label='Love'
            title='Love'
          />{' '}
          using{' '}
          <SiNextDotJs
            sx={{
              color: 'text',
              marginBottom: '-0.25rem',
            }}
            aria-label='NextJS'
            title='NextJS'
          />{' '}
          and{' '}
          <picture className='prismic-icon'>
            <source type='image/webp' srcSet='/prismic-icon.webp' />
            <source type='image/jpeg' srcSet='/prismic-icon.jpg' />
            <img
              src='/prismic-icon.jpg'
              alt='Prismic'
              aria-label='Prismic'
              title='Prismic'
              className='prismic-icon'
            />
          </picture>
        </div>

        <div className='social-row'>
          {/* <Icon
            name="Facebook"
            url="https://facebook.com"
            style={{
              color: 'primary',
              fontSize: '1.75rem'
            }}
          /> */}

          <Icon
            name='Twitter'
            url='https://twitter.com/iamsainikhil12'
            style={{
              color: 'primary',
              fontSize: '1.5rem',
            }}
          />

          <Icon
            name='Medium'
            url='https://medium.com/@iamsainikhil'
            style={{
              color: 'primary',
              fontSize: '1.5rem',
            }}
          />

          <Icon
            name='LinkedIn'
            url='https://www.linkedin.com/in/iamsainikhil'
            style={{
              color: 'primary',
              fontSize: '1.70rem',
              marginBottom: '0.25rem',
            }}
          />
        </div>

        <p style={{textAlign: 'center', marginTop: '0.5rem'}}>
          © {new Date().getFullYear()}{' '}
          <a
            href='https://iamsainikhil.com'
            target='_blank'
            rel='noreferrer noopener'
            className='special-link'
            aria-label='Portfolio'
            title='Portfolio'
            sx={{color: 'primary'}}
            onClick={() =>
              trackGAEvent(
                'footer links',
                `clicked on copyright link in Footer`,
                'text click'
              )
            }>
            Sai&nbsp;Nikhil
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

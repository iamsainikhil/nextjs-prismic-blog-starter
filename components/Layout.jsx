import PropTypes from 'prop-types'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from './Footer'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import siteUrl from '../utils/siteUrl'
import routeURL from './../utils/routeURL'

const Layout = ({title, pathUrl, page, description, image, children}) => {
  const URL = siteUrl(pathUrl || routeURL())
  const siteImage = image || siteUrl('/site_image.png')
  return (
    <>
      <Head
        pathUrl={URL}
        page={page}
        title={title}
        description={description}
        image={siteImage}></Head>
      <div className='content-wrapper'>
        <Header />
        <main className='main'>{children}</main>
        <Footer />
        <IoIosArrowDropupCircle
          className='scroll-top-icon'
          onClick={() => {
            scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

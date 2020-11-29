import PropTypes from 'prop-types'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from './Footer'
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Layout = ({title, children}) => {
  return (
    <>
      <Head title={title}></Head>
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

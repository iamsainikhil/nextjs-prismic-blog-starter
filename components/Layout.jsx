import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import '../styles/layout.scss'
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Layout = ({children}) => {
  return (
    <div className='content-wrapper'>
      <Header />
      <main className='main'>{children}</main>
      {/* <Footer /> */}
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

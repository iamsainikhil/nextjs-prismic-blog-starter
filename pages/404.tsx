/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
const Layout = dynamic(() => import('../components/Layout'), {
  loading: Loader,
})

export default function Custom404() {
  return (
    <Layout title='Page Not Found' page='404'>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          fontSize: [3, 4],
        }}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <picture className='pnf-image'>
          <source type='image/webp' srcSet='/page-not-found.webp' />
          <source type='image/jpeg' srcSet='/page-not-found.jpg' />
          <img
            src='/page-not-found.jpg'
            alt='404 Page Not Found'
            className='pnf-image'
          />
        </picture>
      </div>
    </Layout>
  )
}

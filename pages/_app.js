import {ThemeProvider} from 'theme-ui'
import theme from '../utils/theme'
import '../styles/header.scss'
import '../styles/layout.scss'
import '../styles/footer.scss'
import '../styles/component.scss'

// for more info on measuring app performance
// visit https://nextjs.org/docs/advanced-features/measuring-performance
export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

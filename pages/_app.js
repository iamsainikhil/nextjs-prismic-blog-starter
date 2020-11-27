import {ThemeProvider} from 'theme-ui'
import theme from '../utils/theme'
import '../styles/header.scss'
import '../styles/layout.scss'
import '../styles/footer.scss'

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

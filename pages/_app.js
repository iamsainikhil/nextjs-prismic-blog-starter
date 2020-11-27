import {ThemeProvider} from 'theme-ui'
import theme from '../utils/theme'

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

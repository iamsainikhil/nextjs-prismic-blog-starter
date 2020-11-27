import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

const Head = ({children, title}) => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Damion&family=Fira+Code&family=Lato:ital,wght@0,400;0,700;1,300&display=swap' />
    <NextHead>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <title>{title}</title>
      {children}
    </NextHead>
  </>
)

export default Head

import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

const Head = ({
  children,
  pathUrl,
  page = 'Home',
  title = 'Blog',
  description,
  image,
}) => {
  const prismicRepo = process.env.NEXT_PUBLIC_PRISMIC_REPO
  const twitterHandle = '@iamsainikhil12'
  const siteName = 'NextJS Prismic Blog Starter'
  const pageTitle = `${title} | ${page} | ${siteName}`
  const metaDescription =
    description || 'A blog starter template using NextJS and Prismic CMS'
  return (
    <>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Damion&family=Fira+Code&family=Lato:ital,wght@0,400;0,700;1,300&display=swap' />
      <NextHead>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='blog,nextjs,prismic,theme UI,prismjs,react,scss,blog-starter'
        />
        <meta name='author' content='Sai Nikhil'></meta>
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
        {/* Open Graph */}
        <meta property='og:type' content='website' key='ogtype' />
        <meta property='og:url' content={pathUrl} key='ogurl' />
        <meta property='og:image' content={image} key='ogimage' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta
          property='og:description'
          content={metaDescription}
          key='ogdesc'
        />
        {/* favicons */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#333333' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#333' />
        <title>{pageTitle}</title>
        {/* prismic preview toolbar */}
        <script
          async
          defer
          src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepo}`}></script>
        {children}
      </NextHead>
    </>
  )
}
export default Head

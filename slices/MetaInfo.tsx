import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import { IArticleMeta } from '../schemas'

interface MetaInfoProps {
  meta: IArticleMeta
}

const MetaInfo = ({meta}: MetaInfoProps) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'highlight',
        fontSize: [1],
        p: 3,
        my: 2,
        '@media (max-width: 30em)': {
          flexFlow: 'column-reverse wrap',
        },
      }}>
      <div sx={{px: 2}}>
        <h5 sx={{fontSize: [2], my: 0}}>
          {RichText.asText(meta.website_title)}
        </h5>
        <p>{RichText.asText(meta.website_description)}</p>
        <a
          href={meta.website_url}
          sx={{variant: 'styles.a'}}
          target='_blank'
          rel='noopener noreferrer'>
          {meta.website_url}
        </a>
      </div>
      <div>
        <Image
          src={meta.website_image.url}
          alt={meta.website_image.alt}
          title={meta.website_image.alt}
          layout='fixed'
          width='200'
          height='100'
          className='meta-image'
        />
      </div>
    </div>
  )
}

export default MetaInfo

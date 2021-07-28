import { Fragment } from "react"
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"

import { IImage } from "../schemas"

interface GalleryProps {
  data: {
    items: {
      image: IImage
    }[]
  }
}

const Gallery = ({ data: { items } }: GalleryProps) => {
  const images = items && items.map(({ image }) => {
    return (
      <div key={image.url}>
        <Image
          src={image.url}
          alt={image.alt}
          title={image.alt}
          layout="responsive"
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
        {
          image.alt ? (<p className="legend">{image.alt}</p>) : undefined
        }
      </div>
    )
  })

  const customRenderThumb = (children) => {
    return children.map((item) => {
        return <img key={item.key} src={item.key} />
    })
  }

  return (
    <Fragment>
      {/* @ts-ignore */}
      <Carousel
        axis="horizontal"
        showArrows={true}
        centerMode={false}
        renderThumbs={customRenderThumb}
      >
        {images}
      </Carousel>
    </Fragment>
  )
}

export default Gallery

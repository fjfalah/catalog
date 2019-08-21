import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../components'
import theme from '../../../constants/theme'

const ImagesShowWrapper = styled(Flex)`
  margin-left: ${(props) => props.offset};
  width: 100%;
  img {
    width: 100%;
  }
  transition: .3s margin ease;
`

const ImageThumbnailWrapper = styled(Flex)`
  flex: 1;
  overflow: auto;
  padding: 10px;

  > div {
    display: flex;
  }
`

const ImageThumbnail = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => (props.isActive ? theme.color.purple : theme.color.grey10)};
  padding: 3px;
  margin-right: 5px;
  border-radius: 4px;
  transition: .2s border ease;
  
  > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url(${(props) => props.thumbnail}) center center / cover no-repeat;
    border-radius: 2px;
  }
`

const ImageSlider = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <>
      <ImagesShowWrapper offset={`${activeImage * -100}%`}>
        {
          images.map((image, index) => (
            <img key={index} src={image.fullUrl} alt={image.filePath} />
          ))
        }
      </ImagesShowWrapper>
      <ImageThumbnailWrapper>
        <div>
          {
            images.map((image, index) => (
              <ImageThumbnail
                key={index}
                thumbnail={image.fullUrl}
                isActive={activeImage === index}
                onClick={() => setActiveImage(index)}
              >
                <div />
              </ImageThumbnail>
            ))
          }
        </div>
      </ImageThumbnailWrapper>
    </>
  )
}

export default ImageSlider

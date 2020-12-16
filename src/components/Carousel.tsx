import React, { useState } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isMobile } from 'react-device-detect';

const Item = styled.div`
  > img {
    width: 100%;
    ${isMobile &&
    `
      height: 360px;
      object-fit: cover;
    `}
  }
`;
interface Props {
  images: string[];
}

const Container = styled.div`
  position: relative;
`;

const Pagination = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 10px;
  left: 50%;
  margin-left: -5%;
  height: 30px;
  width: 10%;

  color: white;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 600;

  display: flex;
  align-items: center;
  padding: 0 0.4%;

  > img:first-child {
    display: block;
    margin-right: 5.4%;
  }
  > img:last-child {
    display: block;
    margin-left: 5.4%;
  }
`;
const Line = styled.div`
  background: white;
  height: 1px;
  flex-grow: 1;
  margin: 0 2px;
`;
export const MainCarousel = ({ images }: Props) => {
  const [currentIndex, setIndex] = useState(0);
  const settings = {
    afterChange: (index: number) => setIndex(index),
    dots: false,
    infinite: true,
    arrows: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Item key={index}>
            <img src={image} />
          </Item>
        ))}
      </Slider>
      <Pagination>
        {currentIndex !== 0 && (
          <>
            <img src={require('../assets/left-arrow.svg')} />
            <span>{'0' + (currentIndex + 1)}</span>
          </>
        )}

        <Line />

        {currentIndex !== images.length - 1 && (
          <>
            <span>{'0' + (currentIndex + 2)}</span>
            <img src={require('../assets/right-arrow.svg')} />
          </>
        )}
      </Pagination>
    </Container>
  );
};

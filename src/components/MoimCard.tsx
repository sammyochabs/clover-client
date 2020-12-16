import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  border-radius: 30px;
  max-width: 280px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(160, 160, 160, 0.1);
`;

const ImageArea = styled.div`
  background-image: url(${require('../assets/mock_image_1.jpeg')});
  min-height: 218px;
  position: relative;
  background-size: cover;
`;

const DescriptionArea = styled.div`
  padding: 18px 17px 36px;
  > .top {
    display: flex;
    justify-content: space-between;
    > .title {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: normal;
    }
    > .due-date {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: normal;
    }
  }
  > .description {
    margin: 10px 0 20px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
  }
  > .info-row {
    display: flex;
    justify-content: space-between;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: normal;

    span.highlight {
      color: #8ba2cc;
    }
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const Heart = styled.img`
  width: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

interface Props {}

export const MoimCard = ({ ...props }: Props) => {
  return (
    <Container {...props}>
      <ImageArea>
        <Heart src={require('../assets/heart_empty.svg')} />
      </ImageArea>
      <DescriptionArea>
        <div className="top">
          <span className="title">브런치 모임</span>
          <span className="due-date">~20.05.31</span>
        </div>
        <p className="description">가로수길 “soot”</p>
        <div className="info-row">
          <span>
            남성 <span className="highlight">35,000원</span>
          </span>
          <span>
            <span className="highlight">15</span> / 30명
          </span>
        </div>
        <div className="info-row">
          <span>
            여성 <span className="highlight">35,000원</span>
          </span>
          <span>
            <span className="highlight">15</span> / 30명
          </span>
        </div>
      </DescriptionArea>
    </Container>
  );
};

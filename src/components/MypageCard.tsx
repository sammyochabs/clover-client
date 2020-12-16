import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(194, 194, 194, 0.4);
`;
const Header = styled.div`
  background: #92a8d1;
  padding: 11px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
    color: #ffffff;
  }
  > .sub-title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: #ffffff;
  }
  ${isMobile &&
  `
    flex-direction: column;
    align-items: flex-start;
    > .sub-title{
      margin-top: 7px;
    }
  `}
`;

const Body = styled.div`
  padding: 40px 20px 20px 40px;
  ${isMobile &&
  `
    padding: 20px;;

    `}
`;

interface Props {
  title: string;
  subTitle?: string;
  children: ReactElement | ReactElement[];
}

export const MypageCard = ({ title, subTitle, children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Header>
        <span className="title">{title}</span>
        <span className="sub-title">{subTitle}</span>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

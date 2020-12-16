import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { MoimCard } from '../../components/MoimCard';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  ${isMobile &&
  `
      width: 100%;
    `}
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
  margin-bottom: 204px;
  ${isMobile &&
  `
    grid-template-columns: 280px;
    column-gap: 0;

    `}
`;

const MOCK_LIST = Array.from(new Array(7), () => null);

const MypageLiked = () => {
  const [list, setList] = useState(MOCK_LIST);
  return (
    <Container>
      <PageTitle>마이페이지</PageTitle>
      <HorizontalMenu
        menus={[
          {
            text: '신청 내역',
            link: '/mypage/list',
          },
          {
            text: '찜한 모임',
            link: '/mypage/liked',
            isActive: true,
          },
          {
            text: '포인트',
            link: '/mypage/point',
          },
          {
            text: '내 정보',
            link: '/mypage/info',
          },
          {
            text: '후기 관리',
            link: '/mypage/comment',
          },
          {
            text: '문의 내역',
            link: '/mypage/question',
          },
        ]}
      />
      <ListContainer>
        {list.map((item, index) => (
          <MoimCard key={index} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default MypageLiked;

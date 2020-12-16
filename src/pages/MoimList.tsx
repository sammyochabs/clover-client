import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../components/PageTitle';
import { MoimCard } from '../components/MoimCard';
import { MainCarousel } from '../components/Carousel';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 940px;
  margin: 0 auto 100px;
  ${isMobile &&
  `
    width: 100%;
    margin: 0 auto 68px;
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
  row-gap: 60px;
  `}
`;

const MOCK_LIST = Array.from(new Array(7), () => null);

const MoimList = () => {
  const [list, setList] = useState(MOCK_LIST);
  return (
    <div>
      <MainCarousel
        images={[
          require('../assets/p1_banner.png'),
          require('../assets/p1_banner.png'),
          require('../assets/p1_banner.png'),
        ]}
      />
      <Container>
        <PageTitle>마감임박 행사</PageTitle>
        <ListContainer>
          {list.map((item, index) => (
            <MoimCard key={index} />
          ))}
        </ListContainer>
      </Container>
    </div>
  );
};

export default MoimList;

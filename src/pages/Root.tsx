import React from 'react';
import { CollapsingTable } from '../components/CollapsingTable';
import { MoimCard } from '../components/MoimCard';
import { MypageCard } from '../components/MypageCard';
import { PageTitle } from '../components/PageTitle';
import { TopNav } from '../components/TopNav';
import styled from '@emotion/styled';
import { Dropdown } from '../components/Dropdown';
import { MainCarousel } from '../components/Carousel';
import { isBrowser, isMobile } from 'react-device-detect';

const Container = styled.div`
  ${isBrowser
    ? `
width: 1180px;
margin: 80px auto 100px;
`
    : `
    margin-top: 37px;
    `}
`;
const SearchBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(194, 194, 194, 0.4);
  border-radius: 10px;
  text-align: center;
  ${
    isBrowser
      ? `
  padding-bottom: 40px;

  `
      : `
    margin-left: 17px;
    margin-right: 17px;
  `
  }
  > .title {
    background: #fafafa;
    border-radius: 10px 10px 0px 0px;
    height: 40px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content center;

    color: #92a8d1;
    ${
      isMobile &&
      `
      height: 53px;
      font-size: 20px;

    `
    }
  }
  >.content{
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 40px;
    ${
      isMobile &&
      `
      flex-direction: column;
      align-items: center;
      
    `
    }
  }
  >button{
    width: 118.06px;
    height: 30px;
    margin: 0 auto 40px;
    background: #92A8D1;
    border-radius: 5px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border: none;
    ${
      isMobile &&
      `
      margin: 0;
      width: 100%;
      height: 50px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      font-size: 20px;
    `
    }
  }
`;
const HorizontalOverflow = styled.div`
  display: flex;
  overflow-x: scroll;
  > div {
    flex-shrink: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  ${isMobile &&
  `
    padding: 0 22px;
  `}
`;

const SNSCard = styled.img`
  width: 212px;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

interface DateCardProps {
  bg: any;
  descColor: string;
}
const DateCard = styled.div`
  width: 340px;
  ${isMobile &&
  `
    width: 200px;
  `}
  height: 200px;
  margin-right: 20px;
  background-image: url(${({ bg }: DateCardProps) => bg});
  background-size: auto;
  background-position: center;
  &:last-child {
    margin-right: 0;
  }
  filter: drop-shadow(0px 8px 20px rgba(160, 160, 160, 0.1));
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    color: #ffffff;
  }
  .desc {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: ${({ descColor }: DateCardProps) => descColor};
  }
`;

const RegionalCard = styled.div`
  &:nth-child(2n) {
    background: #b3c5e7;
  }
  &:nth-child(2n + 1) {
    background: #92a8d1;
  }
  width: 140px;
  height: 140px;
  box-shadow: 0px 8px 20px rgba(160, 160, 160, 0.1);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: normal;
  color: #ffffff;
`;

const MoimCardWrapper = styled(MoimCard)`
  width: 280px;
`;

const Root: React.FC = () => {
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
        <SearchBox>
          <div className="title">행사 검색하기</div>
          <div className="content">
            <Dropdown
              placeholder="모임종류"
              options={[
                { value: 1, label: '모임종류A' },
                { value: 2, label: '모임종류B' },
                { value: 3, label: '모임종류C' },
                { value: 4, label: '모임종류D' },
                { value: 5, label: '모임종류E' },
                { value: 6, label: '모임종류F' },
              ]}
            />
            <Dropdown
              placeholder="요일"
              options={[
                { value: 1, label: '월' },
                { value: 2, label: '화' },
                { value: 3, label: '수' },
                { value: 4, label: '목' },
                { value: 5, label: '금' },
                { value: 6, label: '토' },
                { value: 7, label: '일' },
              ]}
            />
            <Dropdown
              placeholder="지역"
              options={[{ value: 1, label: '서초' }]}
            />
            <Dropdown
              placeholder="나이"
              options={[{ value: 1, label: '20세' }]}
            />
          </div>
          <button>검색</button>
        </SearchBox>
        <PageTitle>마감임박</PageTitle>
        <HorizontalOverflow>
          <MoimCardWrapper />
          <MoimCardWrapper />
          <MoimCardWrapper />
          <MoimCardWrapper />
          <MoimCardWrapper />
          <MoimCardWrapper />
        </HorizontalOverflow>
        <PageTitle>지역별 행사</PageTitle>
        <HorizontalOverflow>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
          <RegionalCard>수원</RegionalCard>
          <RegionalCard>역삼</RegionalCard>
        </HorizontalOverflow>
        <PageTitle>요일별 행사</PageTitle>
        <HorizontalOverflow>
          <DateCard bg={require('../assets/p5_card.png')} descColor="#F9A7A7">
            <div>
              <p className="title">수요일 모임</p>
              <p className="desc">#쉬어가는 한 주</p>
            </div>
          </DateCard>
          <DateCard bg={require('../assets/p5_card.png')} descColor="#F9A7A7">
            <div>
              <p className="title">수요일 모임</p>
              <p className="desc">#쉬어가는 한 주</p>
            </div>
          </DateCard>
          <DateCard bg={require('../assets/p5_card.png')} descColor="#F9A7A7">
            <div>
              <p className="title">수요일 모임</p>
              <p className="desc">#쉬어가는 한 주</p>
            </div>
          </DateCard>
          <DateCard bg={require('../assets/p5_card.png')} descColor="#F9A7A7">
            <div>
              <p className="title">수요일 모임</p>
              <p className="desc">#쉬어가는 한 주</p>
            </div>
          </DateCard>
          <DateCard bg={require('../assets/p5_card.png')} descColor="#F9A7A7">
            <div>
              <p className="title">수요일 모임</p>
              <p className="desc">#쉬어가는 한 주</p>
            </div>
          </DateCard>
        </HorizontalOverflow>
        <PageTitle>네잎클로버 SNS</PageTitle>
        <HorizontalOverflow>
          <SNSCard src={require('../assets/p4_card.png')} />
          <SNSCard src={require('../assets/p4_card.png')} />
          <SNSCard src={require('../assets/p4_card.png')} />
          <SNSCard src={require('../assets/p4_card.png')} />
          <SNSCard src={require('../assets/p4_card.png')} />
          <SNSCard src={require('../assets/p4_card.png')} />
        </HorizontalOverflow>
      </Container>
    </div>
  );
};

export default Root;

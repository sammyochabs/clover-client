import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { CollapsingTable } from '../../components/CollapsingTable';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  ${isMobile &&
  `
      width: 100%;
    `}
`;

const MOCK_LIST = Array.from(new Array(7), () => null);

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 10px;
  ${isMobile &&
  `
      margin-left: 44px;
    `}
`;

const RefundInfo = styled.div`
  width: 100%;
  margin: 10px auto 80px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 14px;
  line-height: normal;
  color: #666666;
  > .title {
    font-weight: bold;
  }
  > .desc {
    font-weight: normal;
  }
  ${isMobile &&
  `
      margin-left: 44px;
    `}
`;

const CurrentPoint = styled.div`
  margin-top: 80px;
  width: 280px;
  height: 40px;

  background: #92a8d1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  > span:first-child {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: normal;
    color: #ffffff;
  }
  > span:last-child {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: normal;
    color: #ffffff;
  }
`;

const Table = styled(CollapsingTable)`
  width: 100%;
  margin: 41px auto 160px;
  thead th {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    padding-left: 0;
    color: #444444;
  }
  td {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #444444;
    padding-left: 0 !important;
    &:nth-child(3) {
      color: #8ba2cc;
    }
    &:nth-child(4) {
      color: #ff8e95;
    }
  }
`;

const MypagePoint = () => {
  const [list, setList] = useState(MOCK_LIST);
  return (
    <Container>
      <PageTitle>마이페이지</PageTitle>
      <HorizontalMenu menus={MENUS} />
      <CurrentPoint>
        <span>나의 보유 포인트</span>
        <span>150p</span>
      </CurrentPoint>
      <Table
        heads={[
          { text: '적립일', width: '163px' },
          { text: '적립 내용' },
          { text: '적립 내역', width: '100px' },
          { text: '사용 내역', width: '140px' },
          { text: '잔여 포인트', width: '90px' },
        ]}
        rows={MOCK_LIST.map((row) => [
          { text: '2020.06.01' },
          {
            text: '싱글 직장인 와인 파티 신청',
          },
          { text: '150p' },
          { text: '150p' },
          { text: '150p' },
        ])}
      />
      <Divider />
      <RefundInfo>
        <p className="title"> 포인트 안내</p>
        <p className="desc">
          포인트는 결제금액의 10%가 적립됩니다.
          <br />
          포인트는 행사 결제 시에 사용이 가능합니다.
          <br />
          결제 취소 시 포인트는 환급됩니다.
        </p>
      </RefundInfo>
    </Container>
  );
};

const MENUS = [
  {
    text: '신청 내역',
    link: '/mypage/list',
  },
  {
    text: '찜한 모임',
    link: '/mypage/liked',
  },
  {
    text: '포인트',
    link: '/mypage/point',
    isActive: true,
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
];

export default MypagePoint;

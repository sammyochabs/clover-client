import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { MoimCard } from '../../components/MoimCard';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { MypageCard } from '../../components/MypageCard';
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
  grid-template-columns: 100%;
  row-gap: 20px;
  justify-content: center;
  margin-bottom: 40px;

  ${isMobile &&
  `
      padding: 20px;
    `}
`;

const MOCK_LIST = Array.from(new Array(7), () => null);

const InfoWrapper = styled.table`
  .date {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: normal;
    color: #222222;
  }
  .key {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #222222;
  }
  .value {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #444444;
  }
  .minor-row td {
    padding: 5px 0 5px;
  }
  .major-row td {
    padding: 0 0 15px;
  }
  .point {
    color: #f9a7a7;
    font-weight: bold;
  }

  ${isMobile &&
  `
  tr{
    padding: 0 !important;
  }
    .minor-row, .major-row{
      display: grid;
      grid-template-columns: 100px auto;
      padding: 5px 0 5px;
      td{
        width: 100%;
        display: block;
        font-size: 18px;
      }
    }
    `}
`;

const ActionButtonWrapper = styled.div`
  text-align: right;
  ${isMobile &&
  `
        text-align: center;
      `}
`;

const ActionButton = styled.button`
  padding: 8px 22px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  margin: 16px 0px 20px 0;

  ${({ disabled }) =>
    disabled
      ? `
  background: #C8C8C8;
  `
      : `
  background: #f26868;
  `}

  ${isMobile &&
  `
    width: 200px;
    height: 48px;
    font-size: 20px;
    margin-bottom: 0;
  `}
`;

const ShowMoreButton = styled.div`
  text-align: center;
  margin-bottom: 40px;
  > button {
    width: 300px;
    height: 40px;
    border: none;
    background: #fdfdfd;
    box-shadow: 0px 4px 15px rgba(194, 194, 194, 0.4);
    border-radius: 10px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #222222;
  }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 10px;
  ${isMobile &&
  `
      margin-left: 44px;
  
    `}
`;

const RefundInfo = styled.div`
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

const MypageList = () => {
  const [list, setList] = useState(MOCK_LIST);
  return (
    <Container>
      <PageTitle>마이페이지</PageTitle>
      <HorizontalMenu menus={MENUS} />
      <ListContainer>
        {list.map((item, index) => (
          <MypageCard
            title="싱글 직장인 와인 파티"
            subTitle="20대 후반~30대 초반"
          >
            <InfoWrapper>
              <tbody>
                <tr className="major-row">
                  <td className="date" width="80px">
                    모임 일자
                  </td>
                  <td className="date" colSpan={3}>
                    2월 10일 토요일 오후 5시
                  </td>
                </tr>
                <tr className="minor-row">
                  <td className="key" width="80px">
                    카드결제
                  </td>
                  <td className="value" width="180px">
                    20169261
                  </td>
                  <td className="key" width="80px">
                    결제금
                  </td>
                  <td className="value" width="180px">
                    15,000원
                  </td>
                </tr>
                <tr className="minor-row">
                  <td className="key" width="80px">
                    결제일
                  </td>
                  <td className="value" width="180px">
                    2020-06-05 15:03
                  </td>
                  <td className="key" width="80px">
                    적립 포인트
                  </td>
                  <td className="value point" width="180px">
                    150p
                  </td>
                </tr>
              </tbody>
            </InfoWrapper>
            <ActionButtonWrapper>
              <ActionButton>결제취소</ActionButton>
            </ActionButtonWrapper>
          </MypageCard>
        ))}
      </ListContainer>

      <ShowMoreButton>
        <button>더 보기</button>
      </ShowMoreButton>
      <Divider />
      <RefundInfo>
        <p className="title">환불 안내</p>
        <p className="desc">
          행사 5일 전까지는 전액 환불됩니다.
          <br /> 4일 전 70%, 3일 전 50%, 2일 전 30%, 1일 전 10% 환불됩니다.
          <br /> 행사 당일은 환불이 불가합니다.
        </p>
      </RefundInfo>
    </Container>
  );
};

const MENUS = [
  {
    text: '신청 내역',
    link: '/mypage/list',
    isActive: true,
  },
  {
    text: '찜한 모임',
    link: '/mypage/liked',
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
];

export default MypageList;

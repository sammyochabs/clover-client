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

const InfoWrapper = styled.table`
  width: 100%;
  .key {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: normal;
    color: #000000;
  }
  .value {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: normal;
    color: #888888;
  }

  .name {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: normal;
    color: #000000;
  }
  td {
    padding: 12px 0;
  }
  ${isMobile &&
  `
  td{
    font-size: 18px !important;

  }
    `}
`;

const ActionButtonWrapper = styled.div`
  margin-top: 170px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > .marketing {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: normal;
    > span {
      display: inline-block;
      font-weight: 500;
      color: #92a8d1;
      margin-left: 13px;
    }
  }
  ${isMobile &&
  `
    flex-direction: column;
    align-items: flex-start;
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
  background: #f9a7a7;
  ${isMobile &&
  `
      align-self: center;
      width: 200px;
height: 48px;
font-size: 20px;
margin-top: 40px;
    `}
`;

const ShowMoreButton = styled.button`
  margin: 113px auto 90px;
  display: block;
  width: 595px;
  height: 35px;
  border: none;
  background: #cacaca;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  color: #ffffff;
  ${isMobile &&
  `
       display: none;
      `}
`;

const MypageInfo = () => {
  return (
    <Container>
      <PageTitle>마이페이지</PageTitle>
      <HorizontalMenu menus={MENUS} />
      <ListContainer>
        <MypageCard title="내 정보">
          <InfoWrapper>
            <tbody>
              <tr>
                <td className="key" width="120px">
                  이름
                </td>
                <td className="value name">이수현</td>
              </tr>
              <tr>
                <td className="key" width="120px">
                  연동한 SNS
                </td>
                <td className="value">kakaotalk</td>
              </tr>
              <tr>
                <td className="key" width="120px">
                  생년월일
                </td>
                <td className="value">90.12.16</td>
              </tr>
              <tr>
                <td className="key" width="120px">
                  연락처
                </td>
                <td className="value">010-9095-4549</td>
              </tr>
              <tr>
                <td className="key" width="120px">
                  E-mail
                </td>
                <td className="value">pusspass90@gmail.com</td>
              </tr>
            </tbody>
          </InfoWrapper>
          <ActionButtonWrapper>
            <span className="marketing">
              알림 수신 동의 여부 <span>거절</span>
            </span>
            <ActionButton>수정하기</ActionButton>
          </ActionButtonWrapper>
        </MypageCard>
      </ListContainer>

      <ShowMoreButton>탈퇴하기</ShowMoreButton>
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
  },
  {
    text: '내 정보',
    link: '/mypage/info',
    isActive: true,
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

export default MypageInfo;

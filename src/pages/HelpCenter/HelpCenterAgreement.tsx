import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { MoimCard } from '../../components/MoimCard';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { MypageCard } from '../../components/MypageCard';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 980px;
  margin: 0 auto 30px;
  ${isMobile &&
  `
    width: 100%;
  `}
`;
const Menu = styled(HorizontalMenu)`
  margin-top: 30px;
  text-align: center;
`;

const MypageCardWrap = styled(MypageCard)`
  ${isMobile &&
  `
      margin: 20px;
  `}
`;

const HelpCenterAgreement = () => {
  return (
    <Container>
      <PageTitle>고객센터</PageTitle>
      <Menu menus={MENUS} />
      <MypageCardWrap title="서비스 이용 약관">
        <p>
          <b>개인 정보 처리 방침이란?</b>
        </p>
        <p>
          주식회사 네잎클로버(이하"회사")는 이용자의 ‘동의를 기반으로 개인정보를
          수집·이용 및 제공’하고 있으며, ‘이용자의 권리 (개인정보 자기결정권)를
          적극적으로 보장’합니다. 회사는 정보통신서비스제공자가 준수하여야 하는
          대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고
          있습니다. “개인정보처리방침”이란 이용자의 소중한 개인정보를
          보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가
          준수해야 할 지침을 의미합니다. 본 개인정보처리방침은 회사가 제공하는
          카카오계정 기반의 서비스(이하 ‘서비스'라 함)에 적용됩니다.
        </p>
        <p>
          <b>개인 정보 수집</b>
        </p>
      </MypageCardWrap>
    </Container>
  );
};

const MENUS = [
  {
    text: '공지사항',
    link: '/helpcenter/notice',
  },
  {
    text: 'FAQ',
    link: '/helpcenter/faq',
  },
  {
    text: '1:1문의',
    link: '/helpcenter/ask',
  },
  {
    text: '제휴 문의',
    link: '/helpcenter/contact',
  },
  {
    text: '개인정보처리방침',
    link: '/helpcenter/privacy',
  },
  {
    text: '이용약관',
    link: '/helpcenter/agreement',
    isActive: true,
  },
];

export default HelpCenterAgreement;

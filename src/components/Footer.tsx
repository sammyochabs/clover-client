import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  display: flex;
  padding: 40px 180px 94px 233px;
  border-top: 1px solid #dddddd;
  justify-content: space-between;
  ${isMobile &&
  `
    flex-direction: column-reverse;
    padding: 34px 0px 39px 28px;

  `}
`;

const CompanyInfoWrapper = styled.div`
  > .description {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 180%;
  }
`;

const NavShortcutWrapper = styled.div`
  display: flex;
  margin-top: 43px;
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 20px;
`;

const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 110px;
  > span:first-child {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;

    color: #000000;
  }
  > a {
    margin-top: 20px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-decoration: none;
    color: #222222;
  }
  ${isMobile &&
  `
    margin-right: 96px;
    &:last-child{
      margin-right: 0;
    }
    margin-bottom: 30px;
  
    `}
`;

const KakaoPlusLink = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: normal;

  text-decoration-line: underline;

  color: #000000;
  > img {
    width: 40px;
  }
`;

const AppstoreWrapper = styled.div`
  margin-top: 21px;
  > a {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  ${isMobile &&
  `
     display: flex;
     flex-direction: column;
     >a:first-child{
        margin-bottom: 18px;
     }
    
      `}
`;
const CopyRight = styled.p`
  margin-top: 40px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: normal;

  color: #000000;
`;

export const Footer = () => {
  return (
    <Container>
      <CompanyInfoWrapper>
        <Logo src={require('../assets/logo.png')} />
        <p className="description">
          주식회사 홍익인간 <br />
          대표자 : 이양록 <br />
          개인정보보호책임자 : 이성진 (연락처 : OOO-OOOO-OOOO) <br />
          사업자등록번호 : 778-86-01090 <br />
          대표번호 : OOO-OOOO-OOOO <br />
          카카오톡 플러스친구 바로가기 <br />
          업무시간 : 평일 OO~OO, 점심시간 OO~OO 제외, 주말/공휴일 제외) <br />
          통신판매업등록번호 : 2019-화성동부-0202 <br />
          주소 : 경기도 화성시 동탄기흥로 590, 동탄센트럴에이스타워 B동 518호
        </p>
        <KakaoPlusLink>
          <img src={require('../assets/kakaoplus-logo.png')} />
          <span>카카오톡 플러스친구 바로가기</span>
        </KakaoPlusLink>
        <AppstoreWrapper>
          <a>
            <img src={require('../assets/appstore.svg')} />
          </a>
          <a>
            <img src={require('../assets/playstore.svg')} />
          </a>
        </AppstoreWrapper>
        <CopyRight>Copyright All Rights Reserver.</CopyRight>
      </CompanyInfoWrapper>
      <NavShortcutWrapper>
        <NavCol>
          <span>행사 바로가기</span>
          <Link to="/">행사 검색하기</Link>
          <Link to="/moim/list">마감임박 행사</Link>
          <Link to="/moim/list/regional">지역별 행사</Link>
          <Link to="/moim/list/date">요일별 행사</Link>
        </NavCol>
        <NavCol>
          <span>고객센터</span>
          <Link to="/helpcenter/notice">공지사항</Link>
          <Link to="/helpcenter/faq">FAQ</Link>
          <Link to="/helpcenter/ask">1:1 문의</Link>
          <Link to="/helpcenter/contact">제휴 문의</Link>
          <Link to="/helpcenter/privacy">개인정보처리방침</Link>
          <Link to="/helpcenter/agreement">이용약관</Link>
        </NavCol>
      </NavShortcutWrapper>
    </Container>
  );
};

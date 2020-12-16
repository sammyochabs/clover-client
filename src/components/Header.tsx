import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
const Container = styled.div`
  padding: 58px 0 0px;
  border-bottom: 1px solid #dddddd;
  ${isMobile &&
  `
  padding: 34px 16px 18px 18px;
  `}
`;
const NavButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 59px;
  padding: 0 121px;
  > a {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #444444;
    text-decoration: none;
    &:first-child {
      margin-left: 30px;
    }
  }
`;

const LogoRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 230px 20px;
`;

const Logo = styled.img`
  width: 180px;
`;

const RightNavs = styled.div`
  a:first-child {
    margin-right: 21.35px;
  }
`;

const CategoryWrapper = styled.div`
  padding: 20px 230px;
  border-top: 1px solid #dddddd;
  > a {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: normal;

    color: #000000;
  }
  > .burger {
    display: flex;
    align-items: center;
    img {
      vertical-align: center;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;

const MobileButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 55px 0 0px;
`;

const AlertIcon = styled.img`
  width: 24px;
`;

export const Header = () => {
  return (
    <Container>
      <BrowserView>
        <NavButtonWrapper>
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </NavButtonWrapper>
        <LogoRowWrapper>
          <Link to="/">
            <Logo src={require('../assets/logo.png')} />
          </Link>

          <RightNavs>
            <a>
              <img src={require('../assets/alret.svg')} />
            </a>
            <Link to="/mypage/list">
              <img src={require('../assets/mypage.svg')} />
            </Link>
          </RightNavs>
        </LogoRowWrapper>
        <CategoryWrapper>
          <a className="burger">
            <img src={require('../assets/category.svg')} />
            카테고리
          </a>
        </CategoryWrapper>
      </BrowserView>
      <MobileView>
        <Link to="/">
          <Logo src={require('../assets/logo.png')} />
        </Link>
        <MobileButtonWrapper>
          <a>
            <AlertIcon src={require('../assets/alert-empty.svg')} />
          </a>
          <a className="burger">
            <img src={require('../assets/category.svg')} />
          </a>
        </MobileButtonWrapper>
      </MobileView>
    </Container>
  );
};

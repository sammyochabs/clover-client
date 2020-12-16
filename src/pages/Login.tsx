import React from 'react';
import styled from '@emotion/styled';
import { isMobile, MobileView } from 'react-device-detect';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 390px;
  margin-right: 40px;
  ${isMobile &&
  `
      display: none;
    `}
`;

const FourleafClover = styled.img`
  height: 20px;
`;

const Title = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #444444;
  margin-bottom: 23px;
  ${isMobile &&
  `
      font-weight: normal;
      font-size: 24px;
        `}
`;

const ForgetAccount = styled.a`
  display: block;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-decoration-line: underline;

  margin-top: 60px;
  color: #666666;
`;

const SocialContainer = styled.div`
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    > img {
      width: 28px;
      margin-right: 10px;
    }
    > span {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: normal;
    }
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${isMobile &&
  `
        width: 100vw;
        height: 100vh;
        padding: 37px 17px;
      `}
`;

const Login = () => {
  return (
    <Container>
      <Content>
        <Image src={require('../assets/login-image.png')} />
        <VerticalWrapper>
          <div>
            <Title>
              네잎클로버와 함께
              <br /> 좋은 인연을 찾아보세요.
            </Title>
            <FourleafClover src={require('../assets/fourleaf-clover.png')} />
            <ForgetAccount>가입 정보를 잊어버리셨나요?</ForgetAccount>
          </div>

          <SocialContainer>
            <a>
              <img src={require('../assets/social-kakao.svg')} />
              <span>카카오톡으로 시작하기</span>
            </a>
            <a>
              <img src={require('../assets/social-naver.svg')} />
              <span>네이버로 시작하기</span>
            </a>
            <a>
              <img src={require('../assets/social-facebook.svg')} />
              <span>페이스북으로 시작하기</span>
            </a>
            <a>
              <img src={require('../assets/social-email.svg')} />
              <span>Gmail로 시작하기</span>
            </a>
            <a>
              <img src={require('../assets/social-apple.svg')} />
              <span>애플 아이디로 시작하기</span>
            </a>
          </SocialContainer>
        </VerticalWrapper>
      </Content>
    </Container>
  );
};

export default Login;

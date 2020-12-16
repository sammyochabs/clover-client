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
  ${isMobile &&
  `
      display: block;
    `}
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

const BigTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  color: #444444;
  margin-bottom: 40px;
`;

const GuideText = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;

  color: #000000;
  margin-top: 40px;
`;

const JoinComplete = () => {
  return (
    <Container>
      <Content>
        <Image src={require('../assets/login-image.png')} />
        <VerticalWrapper>
          <div>
            <MobileView>
              <BigTitle>회원가입</BigTitle>
            </MobileView>
            <Title>
              네잎클로버와 함께
              <br /> 좋은 인연을 찾아보세요.
            </Title>
            <FourleafClover src={require('../assets/fourleaf-clover.png')} />
            <GuideText>
              가입이 완료되었습니다.
              <br />
              지금 바로 네잎클로버를 시작해보세요!
            </GuideText>
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

export default JoinComplete;

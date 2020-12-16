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

const Desc = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #444444;
  margin-top: 19px;
`;

const Desc2 = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #444444;
`;

const SMSAgreeRow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #666666;
  > p {
    margin-right: 40px;
  }
  > label {
    margin-right: 40px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  > div {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #444444;
    width: 85px;
  }
  > input {
    border: none;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #666666;
    width: 100%;
  }
`;

const JoinAdditionalInfo = () => {
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
            <GuideText>추가 정보를 입력해주세요.</GuideText>
            <InfoRow>
              <div>생년월일</div>
              <input placeholder="YYYY-MM-DD" />
            </InfoRow>
            <InfoRow>
              <div>연락처</div>
              <input placeholder="연락처를 입력해주세요." />
            </InfoRow>
            <InfoRow>
              <div>이메일</div>
              <input placeholder="이메일을 입력해주세요. (선택)" />
            </InfoRow>
            <GuideText>수신 동의</GuideText>
            <Desc>행사참여와 관련한 정보 및 안내를 받으시겠습니까?</Desc>
            <SMSAgreeRow>
              <Desc2>SNS 수신받기</Desc2>
              <input type="radio" name="agree" />
              <label>동의</label>
              <input type="radio" name="agree" />
              <label>거절</label>
            </SMSAgreeRow>
          </div>
        </VerticalWrapper>
      </Content>
    </Container>
  );
};

export default JoinAdditionalInfo;

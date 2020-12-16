import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 980px;
  margin: 40px auto;
  ${isMobile &&
  `
  margin-top: 0;
    width: 100%;
  `}
`;

const InfoWrapper = styled.div`
  display: flex;
  padding-bottom: 60px;
  border-bottom: 1px solid #777777;
  ${isMobile &&
  `
      flex-direction: column;
    `}
  > .left {
    flex-shrink: 0;
    margin-right: 100px;
    ${isMobile &&
    `
        flex-grow: 1;
        margin-right: 0;
        `}
    img {
      width: 100%;
    }
    > p {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;
      color: #222222;
      margin: 40px 0 20px;
      ${isMobile &&
      `
      text-align: center;
      margin: 26px 0 20px;
      `}
    }
    .demographic {
      display: flex;
      ${isMobile &&
      `
        flex-direction: column;
        align-items: center;
        margin-left: -30px;
        >div{
          display: flex;
          margin-bottom: 34px;
        }
      `}
      img {
        width: 25px;
        margin-right: 19px;
        margin-left: 20px;
        &:first-child {
          margin-left: 0;
        }
      }

      .unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        > div {
          width: 60px;
          height: 60px;
          background: #92a8d1;
          border-radius: 50%;
          font-style: italic;
          font-weight: bold;
          font-size: 24px;
          line-height: normal;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          margin-bottom: 10px;
          font-family: Noto Sans KR;
        }
        > p {
          font-family: Noto Sans KR;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: normal;
          color: #444444;
        }
      }
    }
  }
  > .right {
    flex-grow: 1;
    ${isMobile &&
    `
    padding: 0 18px;
      `}
    > .desc {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: normal;
      color: #222222;
    }
    > .title-row {
      margin: 21px 0 0;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ededed;
      > span {
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: normal;
        color: #000000;
      }
      a {
        img {
          width: 24px;
        }
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
          ${isMobile &&
          `
          margin-right: 0px;
          display: none;
          `}
        }
      }
    }
    > .long-desc {
      margin-top: 20px;
      margin-bottom: 40px;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 160%;
      color: #222222;
    }
    > .small-title {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: normal;
      color: #000000;
      margin-bottom: 20px;
    }
  }
`;

const ApplyInfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const GenderApplyInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 20px;
  background: #ffffff;
  border: 1px solid #444444;
  box-sizing: border-box;
  border-radius: 30px;
  > .gender {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #222222;
    margin-right: 8px;
    display: inline-block;
  }
  > .count {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    color: #8ba2cc;
  }
`;
const ApplyPrice = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #444444;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;

const Point = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  display: flex;
  align-items: center;
  color: #f9a7a7;
  background: #ffffff;
  border: 2px solid #f9a7a7;
  border-radius: 3px;
  padding: 3px 10px;
`;

const GenderRadio = styled.button`
  border-radius: 5px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;

  ${({ selected }: { selected?: boolean }) =>
    selected
      ? `
  color: white;
  background: #92a8d1;
  border:none;
  `
      : `
      color: #92a8d1;
      border: 1.5px solid #92a8d1;
      background: white;
      `}
`;

const GenderRadioWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 43px;
  ${isMobile &&
  `
      flex-direction: column;
      >button{
        width: 100%;
        margin-bottom: 16px;
        font-size: 20px;
        &:last-child{
          margin-bottom: 0;
        }
      }
        `}
`;

const ApplyCount = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ededed;
  > div {
    display: flex;
  }
  .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: #444444;
    ${isMobile &&
    `
        font-size: 20px;
        `}
  }
  .count {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #92a8d1;
    margin: 0 20px;
    ${isMobile &&
    `
        font-size: 20px;
        `}
  }
  a {
    margin-right: 9px;
    > img {
      width: 24px;
    }
  }
  ${isMobile &&
  `
    justify-content: space-between;
  `}
`;

const TotalPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  > .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #000000;
  }
  > .price {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: normal;
    color: #92a8d1;
    > span {
      font-weight: normal;
      font-size: 14px;
      color: #222222;
    }
    ${isMobile &&
    `
      font-size: 20px;
      `}
  }
`;

const ApplyButton = styled.button`
  background: #292929;
  border-radius: 50px;
  height: 40px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  width: 100%;
  color: #ffffff;
`;

const RefundPolicy = styled.div`
  margin-top: 20px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  color: #a7a7a7;
  > .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    color: #a7a7a7;
  }
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  ${isMobile &&
  `
      flex-direction: column;
      `}
`;

const LinkButton = styled.a`
  margin-right: 19px;
  border: none;
  &:last-child {
    margin-right: 0;
  }
  width: 114px;
  height: 40px;
  background: ${({ color }: { color: any }) => color};
  border-radius: 10px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${isMobile &&
  `
    width: 100%;
    margin-bottom: 12px;
    height: 48px;
    font-size: 20px;
        `}
`;

const ProductInfo = styled.div`
  padding-top: 60px;
  font-family: Noto Sans KR;
  line-height: initial;
  > .title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    margin-bottom: 20px;
  }
  > .sub-title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #222222;
  }
  > .content {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #575757;
  }
  > .tag {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #92a8d1;
  }
  ${isMobile &&
  `
    padding: 35px 20px;
          `}
`;

const DetailTitle = styled.div`
  margin-top: 80px;
  height: 40px;
  background: ${({ color }: { color: any }) => color};
  border-radius: 40px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 40px;
  ${isMobile &&
  `
    font-size: 20px;
    height: 48px;
    margin: 43px 20px 21px;
    border-radius: 10px;
  `}
`;

const DetailImage = styled.img`
  width: 100%;
  ${isMobile &&
  `
  width: calc(100% - 40px);
      margin: 0 20px;
    `}
`;

const SmallTitle = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  color: #444444;
  margin-bottom: 40px;
  ${isMobile &&
  `
    margin: 30px 0px 6px 21px;
  `}
`;

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  height: 179px;
  width: 100%;
  padding: 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  &::placeholder {
    color: #666666;
  }
  ${isMobile &&
  `
    margin: 15px 21px 11px;
    width: calc(100% - 42px);
  `}
`;

const MoimDetail = () => {
  return (
    <Container>
      <InfoWrapper>
        <div className="left">
          <img src={require('../assets/mock-detail-image.png')} />
          <p>참여자 정보</p>
          <div className="demographic">
            <div>
              <img src={require('../assets/female.svg')} />
              <div className="unit">
                <div>5</div>
                <p>25~29세</p>
              </div>
              <div className="unit">
                <div>14</div>
                <p>30~34세</p>
              </div>
              <div className="unit">
                <div>0</div>
                <p>35~39세</p>
              </div>
            </div>
            <div>
              <img src={require('../assets/male.svg')} />
              <div className="unit">
                <div>5</div>
                <p>25~29세</p>
              </div>
              <div className="unit">
                <div>14</div>
                <p>30~34세</p>
              </div>
              <div className="unit">
                <div>0</div>
                <p>35~39세</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="desc">트렌디한 커리어 피플을 위한 와인 파티</p>
          <div className={'title-row'}>
            <span>싱글직장인 와인파티</span>
            <div>
              <a>
                <img src={require('../assets/heart.svg')} />
              </a>
              <a>
                <img src={require('../assets/share.svg')} />
              </a>
            </div>
          </div>
          <div className="long-desc">
            트렌디한 커리어 피플을 위한 와인 파티
            <br />
            20대 후반부터 30대 초반까지
          </div>
          <p className="small-title">모집정원</p>
          <ApplyInfoRow>
            <GenderApplyInfo>
              <span className="gender">남자</span>
              <span className="count">15명</span>
            </GenderApplyInfo>
            <ApplyPrice>15,000원</ApplyPrice>
            <Point>150p</Point>
          </ApplyInfoRow>
          <ApplyInfoRow>
            <GenderApplyInfo>
              <span className="gender">여자</span>
              <span className="count">15명</span>
            </GenderApplyInfo>
            <ApplyPrice>15,000원</ApplyPrice>
            <Point>150p</Point>
          </ApplyInfoRow>
          <GenderRadioWrapper>
            <GenderRadio>남자</GenderRadio>
            <GenderRadio selected={true}>여자</GenderRadio>
          </GenderRadioWrapper>
          <ApplyCount>
            <div>
              <div className="title">신청 인원</div>
              <div className="count">3</div>
            </div>
            <div>
              <a>
                <img src={require('../assets/minus.svg')} />
              </a>
              <a>
                <img src={require('../assets/plus.svg')} />
              </a>
            </div>
          </ApplyCount>
          <TotalPriceRow>
            <span className="title">총 결제 금액</span>
            <span className="price">
              30,000<span>원</span>
            </span>
          </TotalPriceRow>
          <ApplyButton>참가 신청</ApplyButton>
          <RefundPolicy>
            <p className="title">환불규정</p>
            <span>
              5일 전 : 100% 환불 / 4일 전 : 70% 환불 / 3일 전 : 50% 환불
              <br />
              2일 전 : 30% 환불 1일 전 : 10% 환불 / 행사 당일 : 환불 불가
            </span>
          </RefundPolicy>
          <LinkButtonWrapper>
            <LinkButton color="#95B6F3" href="#moim_information">
              행사 정보
            </LinkButton>
            <LinkButton color="#F9A7A7" href="#moim_question">
              행사 문의
            </LinkButton>
            <LinkButton color="#FFC671" href="#moim_comment">
              행사 후기
            </LinkButton>
          </LinkButtonWrapper>
        </div>
      </InfoWrapper>
      <ProductInfo>
        <p className="title">상품 정보</p>
        <p className="sub-title">상품 사용 정보</p>
        <p className="content">
          참가자 확인은 14:40부터 시작되며, 참가자 신분확인을 위해선
          <br />
          신분증(주민등록증,운전면허증,여권 등)을 반드시 지참하여
          주시기바랍니다.
          <br />
          행사 중 타인에게 방해되는 행동은 삼가해주시기바라며,
          <br />
          진행에 지나치게 방해가 된다고 판단 될 경우에는 제재를 받거나
          퇴장조치를 받으실 수 있습니다.
          <br />
          당일 오시는 순서대로 남녀 2:2로 자리배치가 진행됩니다.
          <br />
          친구분과 각각 1인으로 신청하신 경우 당일 함께 입장하시면 최대한 가깝게
          앉으실 수 있도록 도와드립니다.
        </p>
        <p className="tag">#샴페인 #샴페인행사 #샴페인파티</p>
        <br />
        <br />
        <p className="sub-title">
          업체 이용 정보 <br />
          날짜: 2020년 1월 18일 (토) <br />
          시간:PM 3:00~6:00 <br />
          장소:역삼역 언더씨유 (서울 강남구 논현로 80길 9) <br />
          인원:60명(여성 30명, 남성 30명) <br />
          대상:27세~37세 싱글직장인 (94년생~84년생) <br />
          기타 문의사항은 1:1문의/모집페이지 하단 문의/카카오톡문의 (@새미프)를
          이용해 주시기 바랍니다.
        </p>
      </ProductInfo>
      <DetailTitle color="#95B6F3" id="moim_information">
        행사 정보
      </DetailTitle>
      <DetailImage src={require('../assets/detail-image.jpg')} />

      <DetailTitle color="#F9A7A7" id="moim_question">
        행사 문의
      </DetailTitle>
      <SmallTitle>행사 문의 / 의견 남기기</SmallTitle>
      <TextArea placeholder="로그인 후 문의사항을 등록해주세요."></TextArea>
      <DetailTitle color="#FFC671" id="moim_comment">
        행사 후기
      </DetailTitle>
      <SmallTitle>행사 후기 남기기</SmallTitle>
      <TextArea placeholder="로그인 후 행사 후기를 남겨주세요."></TextArea>
    </Container>
  );
};

export default MoimDetail;

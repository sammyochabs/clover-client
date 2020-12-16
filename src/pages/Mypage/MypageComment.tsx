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
  width: 100%;
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
  .edit-row {
    table {
      width: 100%;
      > tr > td:first-child {
        vertical-align: top;
        padding-top: 13px;
      }
      > tr > td {
        padding-bottom: 20px;
      }
      input,
      textarea {
        width: 100%;
        background: #fdfdfd;
        border: 1px solid #bbbbbb;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 13px 20px;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        &::placeholder {
          color: #666666;
        }
      }
    }
  }

  ${isMobile &&
  `
      .minor-row>td[colspan="2"]{
        font-size: 18px;
        padding-bottom: 42px;
      }
      .edit-row{
        >td>table>tr>td:nth-child(2n+1){
          display: none;
        }
        >td>table>tr>td:nth-child(2n){
          >input, textarea{
            width: 100%;
            border: none;
            padding: 0;
            font-size: 18px;
          }
        }
      }
    `}
`;

const ActionButtonWrapper = styled.div`
  text-align: right;
  ${isMobile &&
  `
    display: flex;
    flex-direction: column;
    align-items: center;
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
  min-width: 100px;

  ${({ isRed }: { isRed?: boolean }) =>
    isRed
      ? `
  background: #F9A7A7;
  `
      : `
  background: #8BAEEF;
  `}

  margin-right: 20px;
  &:last-item {
    margin-right: 0;
  }
  ${isMobile &&
  `
    margin-right: 0;
    margin-bottom: 16px;
  &:last-item {
    margin-bottom: 0;
  }
  width: 200px;
  height: 48px;
  font-size: 20px;
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

const ImageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  ${isMobile &&
  `
      justify-content: space-between;
    `}
`;
const ImagePlaceholder = styled.button`
  width: 100px;
  height: 100px;
  background: #fdfdfd;
  border: 2px dashed #bbbbbb;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 8px;
  }
  p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: #666666;
  }
  margin-right: 20px;
  ${isMobile &&
  `
    flex: 1;
  `}
`;

const MypageComment = () => {
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
                  <td className="date">2월 10일 토요일 오후 5시</td>
                </tr>
                <tr className="minor-row">
                  <td className="key" colSpan={2}>
                    후기를 작성해주세요.
                    <br />
                    소정의 포인트가 지급됩니다.
                  </td>
                </tr>
                <tr className="edit-row">
                  <td colSpan={2}>
                    <table>
                      <tr>
                        <td>제목</td>
                        <td>
                          <input type="text" placeholder="제목을 입력하세요." />
                        </td>
                      </tr>
                      <tr>
                        <td>내용</td>
                        <td>
                          <textarea
                            rows={7}
                            placeholder="내용을 입력하세요. 30자~500자 등록 가능"
                          ></textarea>
                          <ImageWrapper>
                            <ImagePlaceholder>
                              <div>
                                <img src={require('../../assets/plus.svg')} />
                                <p>사진 첨부</p>
                              </div>
                            </ImagePlaceholder>
                            <ImagePlaceholder>
                              <div>
                                <img src={require('../../assets/plus.svg')} />
                                <p>사진 첨부</p>
                              </div>
                            </ImagePlaceholder>
                            <ImagePlaceholder>
                              <div>
                                <img src={require('../../assets/plus.svg')} />
                                <p>사진 첨부</p>
                              </div>
                            </ImagePlaceholder>
                          </ImageWrapper>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </InfoWrapper>
            <ActionButtonWrapper>
              <ActionButton isRed={true}>후기 작성</ActionButton>
            </ActionButtonWrapper>
            <ActionButtonWrapper>
              <ActionButton isRed={true}>후기 보기</ActionButton>
              <ActionButton isRed={false}>후기 수정</ActionButton>
            </ActionButtonWrapper>
            <ActionButtonWrapper>
              <ActionButton isRed={true}>취소</ActionButton>
              <ActionButton isRed={false}>등록하기</ActionButton>
            </ActionButtonWrapper>
          </MypageCard>
        ))}
      </ListContainer>

      <ShowMoreButton>
        <button>더 보기</button>
      </ShowMoreButton>
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
  },
  {
    text: '후기 관리',
    link: '/mypage/comment',
    isActive: true,
  },
  {
    text: '문의 내역',
    link: '/mypage/question',
  },
];

export default MypageComment;

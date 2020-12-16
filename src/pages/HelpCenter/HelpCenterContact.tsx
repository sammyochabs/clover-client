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

const ActionButtonWrapper = styled.div`
  text-align: right;
  margin-top: 99px;
  ${isMobile &&
  `
  margin-top: 9px;
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
  min-width: 100px;
  background: #92a8d1;
  ${isMobile &&
  `
        width: 200px;
        height: 48px;
        font-size: 20px;
      `}
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  > .label {
    flex-grow: 0;
    padding-top: 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: #222222;
    width: 120px;
    > b {
      font-weight: bold;
    }
  }
  > .form {
    flex-grow: 1;
    input,
    textarea {
      background: #fdfdfd;
      border: 1px solid #bbbbbb;
      box-sizing: border-box;
      border-radius: 5px;
      width: 100%;
      max-width: 100%;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: normal;
      padding: 12px 20px;
    }
    input {
      height: 40px;
    }
  }

  ${isMobile &&
  `
    .label{
      display: none;
    }
    input, textarea{
      border: 0 !important;
      &::placeholder{
        text-decoration-line: underline;
      }
      padding-left: 0 !important;
    }
  `}
`;

const MypageCardContainer = styled.div`
  ${isMobile &&
  `
      padding: 20px;
    `}
`;

const HelpCenterContact = () => {
  return (
    <Container>
      <PageTitle>고객센터</PageTitle>
      <Menu menus={MENUS} />
      <MypageCardContainer>
        <MypageCard title="제휴 문의">
          <Row>
            <div className="label">
              <b>이름 / 상호명</b>
            </div>
            <div className="form">
              <input type="text" placeholder="이름/ 상호명을 입력하세요." />
            </div>
          </Row>
          <Row>
            <div className="label">연락처</div>
            <div className="form">
              <input type="text" placeholder="연락처를 입력하세요." />
            </div>
          </Row>
          <Row>
            <div className="label">이메일</div>
            <div className="form">
              <input type="text" placeholder="이메일을 입력하세요." />
            </div>
          </Row>
          <Row>
            <div className="label">첨부파일</div>
            <div className="form">
              <input type="file" />
            </div>
          </Row>
          <Row>
            <div className="label">제목</div>
            <div className="form">
              <input placeholder="제목을 입력하세요." type="text" />
            </div>
          </Row>
          <Row>
            <div className="label">내용</div>
            <div className="form">
              <textarea rows={7} placeholder="내용을 입력하세요."></textarea>
            </div>
          </Row>
          <ActionButtonWrapper>
            <ActionButton>문의하기</ActionButton>
          </ActionButtonWrapper>
        </MypageCard>
      </MypageCardContainer>
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
    isActive: true,
  },
  {
    text: '개인정보처리방침',
    link: '/helpcenter/privacy',
  },
  {
    text: '이용약관',
    link: '/helpcenter/agreement',
  },
];

export default HelpCenterContact;

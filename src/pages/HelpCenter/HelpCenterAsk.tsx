import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { MoimCard } from '../../components/MoimCard';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { MypageCard } from '../../components/MypageCard';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 980px;
  margin: 0 auto;
  ${isMobile &&
  `
      width: 100%;
    `}
`;
const Menu = styled(HorizontalMenu)`
  margin-top: 30px;
  text-align: center;
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

const ActionButtonWrapper = styled.div`
  text-align: right;
  ${isMobile &&
  `
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
      margin-top: 42px;
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

const QuestionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  color: #222222;
  padding-right: 30px;
  ${isMobile &&
  `
          flex-direction: column;
      `}
`;

const Title = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  margin-top: 44px;
  color: #222222;
`;
const Question = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  margin-top: 20px;
  color: #222222;
`;
const Answer = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  margin-top: 40px;
  color: #222222;
`;

const HelpCenterAsk = () => {
  const [list, setList] = useState(MOCK_LIST);
  return (
    <Container>
      <PageTitle>고객센터</PageTitle>
      <Menu menus={MENUS} />
      <ListContainer>
        {list.map((item, index) => (
          <MypageCard title="문의 내역 보기" subTitle="2020.06.04 16:09">
            <QuestionInfo>
              <span>010-0000-0000</span>
              <span>email.email.com</span>
              <span>첨부파일 없음</span>
            </QuestionInfo>
            <Title>행사 결제 취소 가능할까요?</Title>
            <Question>
              내일 모레 시작인 행사인데 급한 일이 생겨 행사에 못갈것 같아요.
              <br />
              결제 취소해주실 수 있나요?
            </Question>
            <Answer>
              안녕하세요, 네잎클로버입니다.
              <br /> 해당 질문 유선상으로 안내 도와드렸습니다^^
            </Answer>
            <ActionButtonWrapper>
              <ActionButton isRed={true}>답변 대기</ActionButton>
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
    isActive: true,
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
  },
];

export default HelpCenterAsk;

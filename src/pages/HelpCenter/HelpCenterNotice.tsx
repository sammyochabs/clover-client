import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { HorizontalMenu } from '../../components/HorizontalMenu';
import { CollapsingTable } from '../../components/CollapsingTable';
import { isMobile } from 'react-device-detect';
import { useQuery, gql } from '@apollo/client';

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

const MOCK_LIST = Array.from(new Array(7), () => null);

const Table = styled(CollapsingTable)`
  width: 100%;
  margin: 145px auto 40px;
  ${isMobile &&
  `
  width: calc(100% - 40px);
  margin: 20px 20px;
      th:nth-child(3),td:nth-child(3){
        display: none;
      }
      th:nth-child(1),td:nth-child(1){
        width: 70px !important;
        padding-left: 0 !important;
      }
    `}
`;

const ShowMoreButton = styled.button`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #888888;
  height: 44px;

  background: #fdfdfd;
  box-shadow: 0px 4px 15px rgba(194, 194, 194, 0.4);
  border-radius: 10px;
  border: none;
  width: 100%;
  margin-bottom: 74px;

  ${isMobile &&
  `
      width: calc(100% - 80px);
      margin-left: 40px;
      margin-top: 20px;
      color: #222222;
      font-weight: normal;
  `}
`;

const NOTICES = gql`
  query NoticesQuery {
    notices {
      totalCount
      edges {
        node {
          id
          type
          state
          title
          createdAt
          updatedAt
          content
        }
      }
    }
  }
`;

const HelpCenterNotice = () => {
  const { loading, error, data } = useQuery(NOTICES);
  const [list, setList] = useState(MOCK_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) console.log(data.notices.edges[0].node.title);
  return (
    <Container>
      <PageTitle>고객센터</PageTitle>
      <Menu menus={MENUS} />
      <Table
        heads={[
          { text: '공지번호', width: '163px' },
          { text: '제목' },
          { text: '등록일', width: '250px' },
        ]}
        rows={data.notices.edges.map((notice: any, index: any) => [
          { text: index + 1 },
          {
            text: notice.node.title,
            openedText: notice.node.content,
          },

          { text: new Date(notice.node.createdAt).toDateString() },
        ])}
      />
      <ShowMoreButton>더보기</ShowMoreButton>
    </Container>
  );
};

const MENUS = [
  {
    text: '공지사항',
    link: '/helpcenter/notice',
    isActive: true,
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
  },
];

export default HelpCenterNotice;

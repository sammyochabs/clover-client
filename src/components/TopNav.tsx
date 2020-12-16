import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface Props {
  menus: {
    text: string;
    link: string;
    isActive?: boolean;
  }[];
}

const Container = styled.div`
  text-align: center;
  a {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #222222;
    text-decoration: none;
    &.active {
      font-weight: bold;
    }
    margin-right: 47px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TopNav = ({ menus }: Props) => {
  return (
    <Container>
      {menus.map((menu) => (
        <Link to={menu.link} className={menu.isActive ? 'active' : undefined}>
          {menu.text}
        </Link>
      ))}
    </Container>
  );
};

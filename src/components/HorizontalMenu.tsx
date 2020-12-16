import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  margin: 20px 0 60px 0;

  ${isMobile &&
  `
  display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0px 22px;

  `}
`;

const Menu = styled(Link)`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #222222;
    margin-right: 60px;
    &:last-child{
        margin-right: 0;
    }
    text-decoration: none;

    ${({ isActive }: { isActive?: boolean }) =>
      isActive ? `font-weight: bold;` : ``}}
      ${
        isMobile &&
        `
        display: block;
          margin-bottom: 20px;
      
        `
      }

`;

interface Props {
  menus: {
    text: string;
    link: string;
    isActive?: boolean;
  }[];
}

export const HorizontalMenu = ({ menus, ...props }: Props) => {
  return (
    <Container {...props}>
      {menus.map((menu) => (
        <Menu to={menu.link} isActive={menu.isActive}>
          {menu.text}
        </Menu>
      ))}
    </Container>
  );
};

import React from 'react';
import styled from '@emotion/styled';

interface Props {
  isActive?: boolean;
  label: string;
}

const Container = styled.button`
  box-shadow: 0px 8px 20px rgba(160, 160, 160, 0.1);
  border-radius: 30px;
  padding: 14px 33px;
  font-family: Noto Sans KR;
  text-align: center;
  font-size: 16px;
  line-height: normal;
  ${({ isActive }: any) =>
    isActive
      ? `
    font-weight: 500;
    color: #FFFFFF;
    background: #92a8d1;
    border: none;
    `
      : `
      background: white;
    color: #666666;
    font-weight: 300;
    border: 1px solid #aaaaaa;
    `}
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const HorizontalRadioButton = ({ label, isActive }: Props) => {
  return <Container isActive={isActive}>{label}</Container>;
};

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0px 0 40px 0px;
`;
export const HorizontalRadioWrapper = ({ children, ...props }: any) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

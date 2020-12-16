import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const Text = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: normal;
  color: #333333;

  margin: 66px 0 40px 0px;
  ${isMobile &&
  `
  margin: 37px 0 40px 18px;

  `}
`;

interface Props {
  children: string;
}

export const PageTitle = ({ children, ...props }: Props) => (
  <Text {...props}>{children}</Text>
);

import React, { ReactElement, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.table`
  width: 100%;
  thead th {
    text-align: left;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #666666;
    border-bottom: 1px solid #eeeeee;
    padding: 0 0 20px 38px;
  }
  tbody td {
    border-bottom: 1px solid #eeeeee;
    padding: 20px 0 20px 38px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: #222222;
    > .opened-text {
      margin-top: 20px;
    }
  }
`;

interface Props {
  heads: {
    text: string;
    width?: string;
  }[];
  rows: {
    text: string;
    openedText?: string;
  }[][];
}

export const CollapsingTable = ({ heads, rows, ...props }: Props) => {
  const [openedRowIndex, setOpenedRowIndex] = useState<number>();

  const toggleRow = (index: number) => {
    if (!rows[index].some((col) => col.openedText)) return;
    if (openedRowIndex === index) {
      setOpenedRowIndex(undefined);
    } else {
      setOpenedRowIndex(index);
    }
  };
  return (
    <Container {...props}>
      <thead>
        <tr>
          {heads.map((head) => (
            <th key={head.text} style={{ width: head.width }}>
              {head.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} onClick={() => toggleRow(rowIndex)}>
            {row.map((col, colIndex) => (
              <td key={colIndex}>
                {col.text}
                {rowIndex === openedRowIndex && (
                  <p className="opened-text">{col.openedText}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

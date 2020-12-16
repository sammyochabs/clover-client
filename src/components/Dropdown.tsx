import React, { useState } from 'react';
import styled from '@emotion/styled';

const DropDownContainer = styled('div')`
  width: fit-content;
`;

const DropDownHeader = styled('div')`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: normal;
  text-align: center;
  color: #cdcdcd;
  padding: 20px;
  cursor: pointer;
`;

const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 100;
`;

const DropDownList = styled('ul')`
  background: #ffffff;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 20px;
`;

const ListItem = styled('li')`
  height: 60px;
  padding: 0 47px;
  list-style: none;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: normal;
  color: #666666;

  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
`;

interface Props {
  initialValue?: any;
  options: {
    value: any;
    label: any;
  }[];
  placeholder: string;
  onSelect?: (value: any) => void;
}
export const Dropdown = ({
  initialValue,
  options,
  placeholder,
  onSelect,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: any) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect && onSelect(option.value);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption ? selectedOption.label : placeholder}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

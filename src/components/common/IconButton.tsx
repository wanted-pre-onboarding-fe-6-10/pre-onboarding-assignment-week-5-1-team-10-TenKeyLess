import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IIconButton) => {
  return <ButtonWrapper onClick={onClick}>{icon}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 45px;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.5;
  }
`;

export default IconButton;

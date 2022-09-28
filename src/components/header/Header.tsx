import styled from 'styled-components';
import { localeKR } from '../../locales';

const Header = () => {
  return <Title>{localeKR.header}</Title>;
};

const Title = styled.header`
  font-size: 2rem;
`;

export default Header;

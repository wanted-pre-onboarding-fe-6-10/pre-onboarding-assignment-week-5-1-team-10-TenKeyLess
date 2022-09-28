import styled from 'styled-components';
import { localeKR } from '../../locales';

const Header = () => {
  return <Title>{localeKR.header}</Title>;
};

const Title = styled.header`
  font-size: 2rem;
  font-weight: bolder;
  white-space: pre-line;
  text-align: center;
  margin-bottom: ${(props) => props.theme.space.larger};
`;

export default Header;

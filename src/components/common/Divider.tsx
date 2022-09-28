import styled from 'styled-components';

const Divider = () => {
  return <Line />;
};

const Line = styled.div`
  background-color: ${(props) => props.theme.colors.divider};
`;

export default Divider;

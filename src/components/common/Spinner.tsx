import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const Spinner = styled(FaSpinner)`
  font-size: 20px;
  animation: spin 2s linear infinite;
  display: flex;
  align-self: center;
  color: ${(props) => props.theme.colors.primary};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;

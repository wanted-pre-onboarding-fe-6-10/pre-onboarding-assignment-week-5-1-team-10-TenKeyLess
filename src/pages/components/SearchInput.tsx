import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import useKeydown from '../../hooks/useKeydown';
import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
  const { input, handleInputChange } = useInput();
  const { handleKeyArrow } = useKeydown();

  return (
    <InputBox>
      <Icon>
        <BiSearch />
      </Icon>
      <Input
        value={input}
        onChange={e => handleInputChange(e)}
        onKeyDown={handleKeyArrow}
        type="text"
        placeholder="검색어를 입력해 주세요"
      />
      <Button>검색</Button>
    </InputBox>
  );
};

export default SearchInput;

const InputBox = styled.form`
  display: flex;
  justify-content: center;
  width: 90%;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-size: 1rem;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Input = styled.input`
  width: 75%;
  height: 2.5rem;
  font-size: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 15%;
  background-color: #2196f3;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

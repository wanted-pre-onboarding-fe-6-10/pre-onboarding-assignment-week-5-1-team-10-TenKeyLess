import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useInputContext } from '../../contexts/InputContext';
import { ChangeEvent, useCallback, useState } from 'react';
import { DEBOUNCE_DELAY_TIME } from '../../utils/constants';
import IconButton from '../common/IconButton';
import Spinner from '../common/Spinner';
import { localeKR } from '../../locales';
import useFocus from '../../hooks/useFocus';
import SickList from './SickList';

const SearchBar = () => {
  const { query, setQuery, isLoading: isInputLoading } = useInputContext();
  const { ref, setFocus, setBlur, isFocus } = useFocus();

  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /* Debounce 적용 */
  let debounce: NodeJS.Timeout | null = null;
  const handleQueryInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    if (e.target.value.length === 0) {
      return;
    } else {
      if (debounce) clearTimeout(debounce);
      setIsLoading(true);
      debounce = setTimeout(async () => {
        setQuery(e.target.value);
      }, DEBOUNCE_DELAY_TIME);
    }
  };

  // const handleSubmit = useCallback(
  //   async (e: React.FormEvent<EventTarget>) => {
  //     try {
  //       e.preventDefault();
  //       setIsLoading(true);

  //       const trimmed = query.trim();
  //       if (!trimmed) {
  //         return alert('Please write something');
  //       }

  //       const newItem = { title: trimmed };
  //       const data = await createTodo(newItem);

  //       if (data) {
  //         setQuery('');
  //         return setTodos((prev: Array<TodoType>) => [...prev, data]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       alert('Something went wrong.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   },
  //   [query, setTodos]
  // );

  return (
    <SpacebarWrapper>
      {/* <FormBox onSubmit={handleSubmit} focused={isFocus}> */}
      <FormBox focused={isFocus}>
        <FaSearch />
        <SearchInput
          placeholder={localeKR.placeholder.searchbar}
          ref={ref}
          value={textInput}
          onChange={(e) => handleQueryInput(e)}
          onFocus={setFocus}
          onBlur={setBlur}
          disabled={isLoading}
        />
        {!isLoading ? <IconButton icon={<SearchButton />} type="submit" /> : <Spinner />}
      </FormBox>
      {query && <SickList />}
    </SpacebarWrapper>
  );
};

const SpacebarWrapper = styled.div``;

const FormBox = styled.form<{ focused: boolean }>`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  border-radius: calc(0.5 * 100px);
  justify-content: space-evenly;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 6px;

  border: ${({ theme, focused }) => (focused ? `2px solid ${theme.colors.primary}` : null)};
  &:hover {
    box-shadow: 0 0 0 2px #dedede inset;
  }
`;

const SearchInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 85%;
  padding-right: 5px;
  padding-left: 10px;
  border-radius: calc(0.5 * 100px);
  background-color: transparent;
  height: 45px;
  outline: none;
  border: none;
`;

const SearchButton = styled(FaSearch)`
  color: ${(props) => props.theme.colors.primary};
`;

export default SearchBar;

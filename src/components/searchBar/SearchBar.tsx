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
import HistoryList from './HistoryList';

const SearchBar = () => {
  const { query, setQuery, isLoading, addSearchHistory } = useInputContext();
  const { ref, setFocus, setBlur, isFocus } = useFocus();

  const [textInput, setTextInput] = useState('');
  const [keyDownEvent, setKeyDownEvent] = useState<React.KeyboardEvent>();
  // const [isLoading, setIsLoading] = useState(false);

  /* Debounce 적용 */
  let debounce: NodeJS.Timeout | null = null;
  const handleQueryInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    if (e.target.value.length === 0) {
      return;
    } else {
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(async () => {
        setQuery(e.target.value);
      }, DEBOUNCE_DELAY_TIME);
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<EventTarget>) => {
      try {
        e.preventDefault();
        addSearchHistory(textInput);
        // setIsLoading(true);
        setQuery('');
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setTextInput('');
        // setIsLoading(false);
      }
    },
    [query]
  );

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    setKeyDownEvent(e);
  };

  return (
    <SearchBarWrapper onKeyDown={handleKeyArrow}>
      <FormBox onSubmit={handleSubmit} focused={isFocus}>
        <SearchInput
          placeholder={localeKR.placeholder.searchbar}
          ref={ref}
          value={textInput}
          onChange={(e) => handleQueryInput(e)}
          onFocus={setFocus}
          onBlur={setBlur}
          // disabled={isLoading}
        />
        {!isLoading ? <IconButton icon={<SearchButton />} type="submit" /> : <LoadingSpinner />}
      </FormBox>
      {isFocus ? query ? <SickList keyDownEvent={keyDownEvent} /> : <HistoryList /> : null}
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 300px;
  max-width: 600px;
`;

const FormBox = styled.form<{ focused: boolean }>`
  margin-bottom: ${(props) => props.theme.space.smaller};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.subBackground};
  border: 1px solid #dedede;
  border-radius: ${(props) => props.theme.radius[1]};
  padding: 0 ${(props) => props.theme.space.smaller};

  box-shadow: ${({ theme, focused }) =>
    focused ? `0 0 0 2px ${theme.colors.primary} inset` : null};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoveredBackground};
  }
`;

const SearchInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 85%;
  border-radius: calc(0.5 * 100px);
  background-color: transparent;
  height: 45px;
  outline: none;
  border: none;
  padding-left: ${(props) => props.theme.space.medium};
  ::placeholder {
    color: ${(props) => props.theme.colors.textDisabled};
  }
`;

const SearchButton = styled(FaSearch)`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  width: 100%;
  height: 75%;
  padding: 8px;
  color: ${(props) => props.theme.colors.subBackground};
`;

const LoadingSpinner = styled(Spinner)`
  margin-right: ${(props) => props.theme.space.smaller};
`;

export default SearchBar;

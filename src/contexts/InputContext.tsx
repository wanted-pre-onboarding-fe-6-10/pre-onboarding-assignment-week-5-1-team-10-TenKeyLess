import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IInputProvider {
  children: any;
  searchHistory: Array<string>;
}

interface IInputContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  searchHistory: Array<string>;
  addSearchHistory: (keyword: string) => void;
}

const InputContext = createContext<IInputContext | null>(null);

export const useInputContext = () => {
  const context = useContext<IInputContext | null>(InputContext);
  if (!context) throw new Error('No context');
  return context;
};

export function InputContextProvider({ children, searchHistory }: IInputProvider) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addSearchHistory = (keyword: string) => {
    searchHistory.unshift(keyword);
  };

  const value: IInputContext = {
    query,
    setQuery,
    isLoading,
    setIsLoading,
    searchHistory,
    addSearchHistory,
  };

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
}

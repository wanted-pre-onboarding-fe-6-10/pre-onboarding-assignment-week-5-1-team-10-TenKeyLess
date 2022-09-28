import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IInputProvider {
  children: any;
}

interface IInputContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const InputContext = createContext<IInputContext | null>(null);

export const useInputContext = () => {
  const context = useContext<IInputContext | null>(InputContext);
  if (!context) throw new Error('No context');
  return context;
};

export function InputContextProvider({ children }: IInputProvider) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const value: IInputContext = {
    query,
    setQuery,
    isLoading,
    setIsLoading,
  };

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
}

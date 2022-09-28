import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { SickType } from '../types/sick';

interface IRecommendProvider {
  children: any;
  cache: Map<string, Array<SickType>>;
}

interface IRecommendContext {
  recommendations: Array<SickType>;
  setRecommendations: Dispatch<SetStateAction<Array<SickType>>>;
  cache: Map<string, Array<SickType>>;
}

const RecommendContext = createContext<IRecommendContext | null>(null);

export const useRecommendContext = () => {
  const context = useContext<IRecommendContext | null>(RecommendContext);
  if (!context) throw new Error('No context');
  return context;
};

export function RecommendContextProvider({ children, cache }: IRecommendProvider) {
  const [recommendations, setRecommendations] = useState<Array<SickType>>([]);

  const value: IRecommendContext = {
    recommendations,
    setRecommendations,
    cache,
  };

  return <RecommendContext.Provider value={value}>{children}</RecommendContext.Provider>;
}

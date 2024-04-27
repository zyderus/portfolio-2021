'use client';
import { fetchRepos } from '@/utils/requests';
import { createContext, useState, useEffect, useContext } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string; // Link to the repo on GitHub
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };
}

interface GlobalContextValue {
  repos: GitHubRepo[];
  setRepos: (repos: GitHubRepo[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  error: string | unknown;
  setError: (error: string) => void;
}

const initialState: GlobalContextValue = {
  repos: [],
  setRepos: () => {},
  isLoading: false,
  setIsLoading: () => {},
  theme: 'light',
  setTheme: () => {},
  error: '',
  setError: () => {},
};

const GlobalContext = createContext<GlobalContextValue>(initialState);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [repos, setRepos] = useState(initialState.repos);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [error, setError] = useState(initialState.error);
  const [theme, setTheme] = useState(initialState.theme);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchRepos();
        setRepos(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        repos,
        setRepos,
        isLoading,
        setIsLoading,
        theme,
        setTheme,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}

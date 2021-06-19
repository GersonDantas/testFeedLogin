import { SetStateAction, Dispatch } from "react";
import { createContext, ReactNode, useState, useContext } from "react";

type ContextData = {
  isLoading: boolean;
  loadingVisibleSuport: () => void;
  setIsloading: Dispatch<SetStateAction<boolean>>
};

export const Context = createContext({} as ContextData);

type ContextProvider = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProvider) {
  const [isLoading, setIsloading] = useState(false);

  function loadingVisibleSuport() {
    setIsloading(!isLoading);
  }

  return (
    <Context.Provider
      value={{
        isLoading,
        loadingVisibleSuport,
        setIsloading
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextData = () => {
  return useContext(Context);
};

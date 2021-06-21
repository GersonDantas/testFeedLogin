import { SetStateAction, Dispatch } from "react";
import { createContext, ReactNode, useState, useContext } from "react";

type ContextData = {
  isLoading: boolean;
  setIsloading: Dispatch<SetStateAction<boolean>>;
  iUserInput: {username: string; password: string };
  setIUserInput: Dispatch<
    SetStateAction<{ username: string; password: string }>
  >;
  saveUserUser: (username: string, password: string) => void;
};

export const Context = createContext({} as ContextData);

type ContextProvider = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProvider) {
  const [isLoading, setIsloading] = useState(false);
  const [iUserInput, setIUserInput] = useState({ username: "", password: "" });

  function saveUserUser(username: string, password: string) {
    setIUserInput({
      username,
      password,
    });
  }

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsloading,
        iUserInput,
        setIUserInput,
        saveUserUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextData = () => {
  return useContext(Context);
};

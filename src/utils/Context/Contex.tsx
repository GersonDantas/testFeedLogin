import { SetStateAction, Dispatch } from "react";
import { createContext, ReactNode, useState, useContext } from "react";

type ContextData = {
  isLoading: boolean;
  setIsloading: Dispatch<SetStateAction<boolean>>;
  iUserInput: {
    username: string;
    password: string;
  };
  setIUserInput: Dispatch<
    SetStateAction<{
      username: string;
      password: string;
    }>
  >;
  postsState: object[];
  setPosts: Dispatch<SetStateAction<object[]>>;
};

export const Context = createContext({} as ContextData);

type ContextProvider = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProvider) {
  const [isLoading, setIsloading] = useState(false);
  const [iUserInput, setIUserInput] = useState({ username: "", password: "" });
  const [postsState, setPosts] = useState([{}]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsloading,
        iUserInput,
        setIUserInput,
        postsState,
        setPosts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextData = () => {
  return useContext(Context);
};

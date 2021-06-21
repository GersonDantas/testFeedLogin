import api from "./api/api";

declare interface Data {
  username: string;
  password: string;
}

type AuthToken = string;

export const Login = (data: Data) => {
  return api.post("/auth", data).then((res) => res.data);
};

//removendo informações do local storage

export const Logout = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("auth");
  }
};

//colocando token no local storage

export const storeToken = (authToken: AuthToken) => {
  if (typeof window !== "undefined") {
    //antes de colocar, testa se window existe, pra não ter o perigo de carregar no server-seide
    window.localStorage.setItem("authToken", authToken);
  }
};

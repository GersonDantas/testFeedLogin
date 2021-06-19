import api from "../pages/api/api";

declare interface Data {
  username: string;
  password: string;
}

type AuthToken = string;

export const Login = (data: Data) => {
  return api.post("/auth", data).then((res) => res.data);
};

export const Logout = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("authToken");
  }
};

export const storeToken = (authToken: AuthToken) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("authToken", authToken);
  }
};

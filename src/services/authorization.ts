import api from "./api/api";

//localStorage

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("authToken");
  }
};

// salvando e pegando usuário e senha localstorage

export const getAuthorization = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("auth");
  }
};

export const setAutorization = (username: string, password: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(
      "auth",
      JSON.stringify({
        username: username,
        password: password,
      })
    );
  }
};

//tratamento de mensagens

type Message = string;

export const MessagePost = (message: Message) => {
  return api
    .post(
      "/feed",
      { message: message },
      {
        headers: {
          "ens-auth-token": getToken(),
        },
      }
    )
    .then((res) => res.data)
    .catch((e) => alert(`server error: ${e.message}`));
};

export const infoFeed = () => {
  return api
    .get("/feed", {
      headers: {
        "ens-auth-token": getToken(),
      },
    })
    .then((res) => res.data)
    .catch((e) => alert(`server error </br> error: ${e.message}`));
};

export const returnFeed = (seq: number, limit: number, order: string) => {
  return api
    .get(`/feed?startSeq=${seq}&limit=${limit}&order=${order}`, {
      headers: {
        "ens-auth-token": getToken(),
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e.message));
};

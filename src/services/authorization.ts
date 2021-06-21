import api from "./api/api";

type Message = string;

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("authToken");
  }
};

export const MessagePost = (message: Message) => {
  return api
    .post("/feed",{"message": message}, {
      headers: {
        "ens-auth-token": getToken(),
      },
    })
    .then((res) => console.log(res.data));
};

export const SeeFeed = () => {
  return api
    .get("/feed", {
      headers: {
        "ens-auth-token": getToken(),
      },
    })
    .then((res) => res.data);
};

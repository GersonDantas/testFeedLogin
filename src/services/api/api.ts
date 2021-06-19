import axios from "axios";
// import { getToken } from "../authentication";

const api = axios.create({
  baseURL: "https://job.ensemble.com.br/api",
  headers: {
    "ens-api-token": "cd0WQOEH7C3jAMUEXkCS",
  },
});

// if (typeof window !== "undefined") {
//   const authToken = window.localStorage.getItem("authToken");
//   if (authToken) {
//     api.defaults.headers.common["ens-auth-token"] = authToken
//   }
// }

export default api;

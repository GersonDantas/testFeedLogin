import axios from "axios";

const api = axios.create({
  baseURL: "https://job.ensemble.com.br/api",
  headers: {
    "ens-api-token": "cd0WQOEH7C3jAMUEXkCS",
  },
});

export default api;

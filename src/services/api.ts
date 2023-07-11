import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

const getProducts = async (query: string) => {
  api
    .get(query)
    .then((resp) => {
      return resp.data.results;
    })
    .catch((err) => console.log(err));
};

export { api, getProducts };

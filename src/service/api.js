import axios from "axios";

const hackerNewsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

hackerNewsApi.getLatestNews = function (page) {
  return hackerNewsApi
    .get(`/search_by_date?tags=story&page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

hackerNewsApi.searchNews = function (page, query) {
  return hackerNewsApi
    .get(`/search?query=${query}&tags=story&page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export default hackerNewsApi;

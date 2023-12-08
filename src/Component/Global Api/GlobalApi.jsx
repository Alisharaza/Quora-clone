import axios from "axios";

const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: {
    projectId: "jod49orjiraa",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("quora_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;

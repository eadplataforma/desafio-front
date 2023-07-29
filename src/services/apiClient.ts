import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    token: process.env.NEXT_PUBLIC_API_SECRET,
  };
  return config;
});

export default axiosClient;

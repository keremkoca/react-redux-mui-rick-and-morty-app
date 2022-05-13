import axios from "axios";

const axiosInstance = axios.create();
const abortController = new AbortController();

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.message) abortController.abort(error);
    return (
      Promise.reject(error.response && error.response.data) ||
      "something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.signal = abortController.signal;
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

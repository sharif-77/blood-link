import axios from "axios";

const instance = axios.create({
  baseURL: "https://blood-link-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;

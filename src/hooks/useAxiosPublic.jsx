
import axios from "axios";

const instance = axios.create({
  baseURL: "https://blood-link-server.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;

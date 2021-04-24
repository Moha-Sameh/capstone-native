import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.137.253:8080",
});

export default instance;

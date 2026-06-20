import axios from "axios";

export default axios.create({
  baseURL: "http://10.36.8.172:5000/api"
});
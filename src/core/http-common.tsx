import axios from "axios";

export default axios.create({
  baseURL: "http://pamcore.azurewebsites.net/api/v1/",
  headers: {
     "Content-Type": "application/json"
  }
});

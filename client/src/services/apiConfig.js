import axios from "axios"

const base = process.end.NODE_ENV === "production" ? "deployedURL" : "http://localhost:3000"
const api = axios.create(
  {
    baseURL: base
  }
)

export default api
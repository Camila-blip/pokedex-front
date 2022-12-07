import axios from "axios";
const token = localStorage.getItem("Token");

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
        accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default api;

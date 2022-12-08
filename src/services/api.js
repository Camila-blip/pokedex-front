import axios from "axios";

const token = localStorage.getItem("Token");

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
});

api.interceptors.request.use(async (config) => {
    console.log("token", token);
    if (token) {
        config.headers.authorization =  `Bearer ${token}` ;
    }
    return config;
});

export default api;

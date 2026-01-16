import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

// Este interceptor pegará el token automáticamente si existe
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["x-auth-token"] = token;
    }
    return config;
});

export default api;

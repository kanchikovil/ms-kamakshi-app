import axios from "axios";
import { getToken } from "../context/LoginContext"; // Function to get token from localStorage or Context

const axios_instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api", // Set API base URL
});


// Add request interceptor to attach token
axios_instance.interceptors.request.use(
    (config) => {
        const token = getToken(); // Retrieve token from AuthContext/localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios_instance;

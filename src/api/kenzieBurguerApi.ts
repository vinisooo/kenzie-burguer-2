import axios from "axios";

export const kenzieBurguerAPI = axios.create({
    baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
    timeout: 5000
});
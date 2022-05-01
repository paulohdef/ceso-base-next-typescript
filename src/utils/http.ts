import axios from "axios";

export const http = axios.create({
    baseURL: 'http://host.docker.internal:3000'
});
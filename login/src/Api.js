import axios from "axios";

const API_URL = 'https://your-api-url.com';

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
    })
    return response.data
}
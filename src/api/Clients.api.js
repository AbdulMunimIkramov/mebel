import axios from "axios";

export const getAllClients = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(resp);
        return resp;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
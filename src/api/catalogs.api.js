import axios from "axios";

export const getAllProducts = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log(resp);
        return resp;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
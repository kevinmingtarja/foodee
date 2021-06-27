import axios from "axios";

const request = axios.create({
    baseURL: "https://foodee-orbital.herokuapp.com",
});

export default request;

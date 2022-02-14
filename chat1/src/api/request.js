import axios from "axios"

class Request {
    constructor(token = "") {
        this.request = axios.create({
            baseURL: "https://api.github.com"
        });
        this.token = token;// ключ, позволяющий серверу идентифицировать пользоателя
    }

    get = (url) => {
        return this.request.get(url);
    }

    post = (url, params) => {
        return this.request.post(url, params);
    }
}

export const request = new Request();
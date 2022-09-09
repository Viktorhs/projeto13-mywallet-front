import axios from "axios";

const BASE_URL = 'localhost:5000';


function createHeaders(token) {
    const auth = JSON.parse(token)
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    };

    return config;
}


function postLogin(params) {
    const promise = axios.post(`${BASE_URL}/auth/login`, params);
    return promise;
}

function postRegister(params) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, params);
    return promise;
}

export {
    postLogin,
    postRegister
};
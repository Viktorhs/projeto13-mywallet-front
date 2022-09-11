import axios from "axios";

const BASE_URL = 'http://localhost:5000';


function createHeaders(token) {
    const auth = JSON.parse(localStorage.getItem("mywallet"))
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}



function postLogin(params) {
    const promise = axios.post(`${BASE_URL}/signin`, params);
    return promise;
}

function postRegister(params) {
    const promise = axios.post(`${BASE_URL}/signup`, params);
    return promise;
}

export {
    postLogin,
    postRegister
};
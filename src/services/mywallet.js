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

function listOperations() {
    const header = createHeaders()
    console.log(header)
    const promise = axios.get(`${BASE_URL}/listWallets`, header);
    return promise;
}

function logout() {
    const header = createHeaders()
    console.log(header)
    const promise = axios.delete(`${BASE_URL}/logout` ,header);
    return promise;
}

function postNewOperation(params) {
    const header = createHeaders();
    const promise = axios.post(`${BASE_URL}/operation`, params, header);
    return promise;
}

function deleteOperation(id) {
    const header = createHeaders();
    const promise = axios.delete(`${BASE_URL}/delete/${id}`, header);
    return promise
}

export {
    postLogin,
    postRegister,
    listOperations,
    logout,
    postNewOperation,
    deleteOperation
};
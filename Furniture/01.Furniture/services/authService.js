import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/users';

function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUsername(){
    return localStorage.getItem('username');
}

function getUserId(){
    return localStorage.getItem('userId');
}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
}

async function login(user){
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}

async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}

async function logout(user){
    await jsonRequest(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

export default {
    getAuthToken,
    getUserId,
    getUsername,
    isLoggedIn,
    login,
    register,
    logout
}
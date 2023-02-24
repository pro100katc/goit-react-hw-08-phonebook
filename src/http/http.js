import axios from "axios";

export const userPublicAPI = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

export const userPrivateAPI = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

export const token = {
    set: (dataToken) => {
        userPrivateAPI.defaults.headers.Authorization = dataToken;
    },

    remove: () => {
        userPrivateAPI.defaults.headers.Authorization = null;
    }
}

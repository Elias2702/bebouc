import axios from "axios";
const headers = {
    "Content-Type": "application/json",
};
// const burl = "http://localhost";

export default {
    login: function(email, password) {
        return axios.post(
            `/api/login`,
            {
                email: email,
                password: password,
            },
            {
                headers: headers,
            },
        );
    },
    signup: function(send) {
        return axios.post(`${burl}/api/create`, send, {headers: headers});
    },

    isAuth: function() {
        return localStorage.getItem("token") !== null;
    },
    logout: function() {
        localStorage.clear();
    },
};

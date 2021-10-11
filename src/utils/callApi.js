import axios from "axios";

const callApi = (url, method = "GET", data = null, token = null) =>  {
    return axios ({
        url,
        method,
        data,
        headers : token ? {
            Authorization:'Bearer ' + token
        } : null,
    })
}

export default callApi;
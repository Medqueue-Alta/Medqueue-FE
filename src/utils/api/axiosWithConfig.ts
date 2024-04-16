import axios from "axios"


let bearerToken = ""

const axiosWithConfig = axios.create()

export const setAxiosConfig = (token: string) => {
    bearerToken = token
}

axiosWithConfig.interceptors.request.use((axiosConfig) => {
    axiosConfig.baseURL = "https://medqueue.site"
    // axiosConfig.baseURL = "https://virtserver.swaggerhub.com/WFHADIT/medqueue.site/1.0.0"
    axiosConfig.headers.Authorization = `Bearer ${bearerToken}`

    return axiosConfig
})

export default axiosWithConfig
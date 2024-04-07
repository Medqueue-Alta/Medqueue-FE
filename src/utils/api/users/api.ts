import { IResponse } from "@/utils/types/api"
import axiosWithConfig from "../axiosWithConfig"


export const getUser = async () => {
    try {
        const response = await axiosWithConfig.get("/users")
        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}
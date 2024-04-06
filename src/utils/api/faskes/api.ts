import { IResponse } from "@/utils/types/api"
import axiosWithConfig from "../axiosWithConfig"
import { SchedulesSchema } from "./type"

export const getFaskesSchedules = async () => {
    try {
        const response = await axiosWithConfig.get("/schedules")
        
        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}

export const getResevations = async () => {
    try {
        const response = await axiosWithConfig.get("/reservations")

        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}

export const postSchedules = async (body: SchedulesSchema) => {
    try {
        const response = await axiosWithConfig.post("/schedules",body)

        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}
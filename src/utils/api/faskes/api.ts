import { IResponse } from "@/utils/types/api"
import axiosWithConfig from "../axiosWithConfig"
import { SchedulesSchema } from "./type"

export const getFaskesSchedules = async (poli_id : number) => {
    try {
        const response = await axiosWithConfig.get(`/schedules/poli?poli_id=${poli_id}`)
        
        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}
export const getFaskesSchedulesById = async (schedule_id : number) => {
    try {
        const response = await axiosWithConfig.get(`/schedules/${schedule_id}`)
        
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

export const editSchedule = async (id : number, body : SchedulesSchema) => {
    try {
        const response = await axiosWithConfig.put(`/schedules/${id}`,body)

        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
} 

export const deleteSchedule = async (id : number) => {
    try {
        const response = await axiosWithConfig.delete(`/schedules/${id}`)
        return response.data as IResponse
    } catch (error : any) {
        throw Error(error.response.data.message)
    }
}
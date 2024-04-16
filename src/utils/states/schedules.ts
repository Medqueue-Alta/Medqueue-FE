import {create} from "zustand"
import { setAxiosConfig } from "../api/axiosWithConfig";
import { getFaskesSchedules, getFaskesSchedulesById } from "../api/faskes/api";

export interface ScheduleType {
    schedule_id?: number;
    poli_id?: number;
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
    kuota: number;
    terisi: number;
}

interface ScheduleStoreType {
    schedules: ScheduleType[] | [];
    schedule: ScheduleType;
    fetchSchedules: (poli_id : number) => Promise<void>;
    fetchScedulesById: (schedule_id : number) => Promise<void>;
}

export const useSchedulesState = create<ScheduleStoreType>()((set) => ({
    schedules: [],
    schedule: {
        poli_id: 1,
        hari: "",
        jam_mulai: "",
        jam_selesai: "",
        kuota: 0,
        terisi: 0
    },
    fetchSchedules: async (poli_id : number) => {
        try {
            setAxiosConfig(localStorage.getItem("token")!)
            const response = await getFaskesSchedules(poli_id)
            set({schedules: response.data})
        } catch (error : any) {
            throw Error(error.response.data.message)
        }
    },
    fetchScedulesById: async (schedule_id : number) =>  {
        try {
            setAxiosConfig(localStorage.getItem("token")!)
            const response = await getFaskesSchedulesById(schedule_id)
            set({schedule: response.data})
        } catch (error : any) {
            throw Error(error.response.data.message)
        }
    },
})) 
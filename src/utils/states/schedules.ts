import {create} from "zustand"
import { setAxiosConfig } from "../api/axiosWithConfig";
import { getFaskesSchedules } from "../api/faskes/api";

export interface ScheduleType {
    schedule_id: number;
    poli: string;
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
    kuota: string;
}

interface ScheduleStoreType {
    schedules: ScheduleType[] | [];
    fetchSchedules: () => Promise<void>;
}

export const useSchedulesState = create<ScheduleStoreType>()((set) => ({
    schedules: [],
    fetchSchedules: async () => {
        try {
            setAxiosConfig(localStorage.getItem("token")!)
            const response = await getFaskesSchedules()
            set({schedules: response.data})
        } catch (error : any) {
            throw Error(error.response.data.message)
        }
    }
})) 
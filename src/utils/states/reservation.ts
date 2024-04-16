import {create} from "zustand"
import { getResevations } from "../api/faskes/api";
import { setAxiosConfig } from "../api/axiosWithConfig";


interface ReservationType {
    nama: string;
    reservations_id: number;
    user_id: number;
    id_jadwal: number;
    poli_id: number;
    tanggal_kunjungan: string;
    keluhan: string;
    bpjs: boolean;
    status: string;
}

interface ReservationStoreType {
    reservations: ReservationType[] | [],
    fetchReservationData: () => Promise<void>
}

export const useReservationStore = create<ReservationStoreType>()((set) => ({
    reservations: [],
    fetchReservationData: async () => {
        try {
            setAxiosConfig(localStorage.getItem("token")!)
            const response = await getResevations()
            set({reservations: response.data})
        } catch (error : any) {
            throw Error(error.response.data.message)
        }
    }
}))
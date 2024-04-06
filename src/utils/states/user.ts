import {create} from "zustand"
import { getUser } from "../api/users/api";
import { setAxiosConfig } from "../api/axiosWithConfig";

interface UserState {
    nama: string;
    email: string;
    tempat_lahir: string;
    tgl_lahir: Date;
    no_bpjs: string
    gender: string;
    no_nik: string;
    gol_darah: string;
    no_telepon: string;
}

interface UserStore {
    user: UserState | null;
    fetchUser: () => Promise<void>;
}


export const useUserState = create<UserStore>()((set) => ({
    user: null,
    fetchUser: async () => {
        try {
            setAxiosConfig(localStorage.getItem("token")!)
            const response = await getUser()
            set({user: response.data})
        } catch (error : any) {
            throw Error(error.response.data.message)
        }
    }
}))
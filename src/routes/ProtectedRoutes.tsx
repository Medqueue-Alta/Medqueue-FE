import { useToast } from "@/components/ui/use-toast"
import {Navigate, Outlet, useLocation} from "react-router-dom"
const ProtectedRoutes = () => {
    const {pathname} = useLocation()
    const { toast } = useToast()
    const token = localStorage.getItem("token")
    const authProtected = ["/login","/register"]
    const protectedByToken = [
        "/",
        "/faskes/antrian/umum",
        "/faskes/antrian/gigi",
        "/faskes/antrian/kia",
        "/faskes/antrian/ugd",
        "/faskes/jadwal/umum",
        "/faskes/jadwal/gigi",
        "/faskes/jadwal/kia",
        "/faskes/jadwal/ugd",
        "/faskes/jadwal/add",
        "/pasien/home",
        "/pasien/reservasi",
        "/pasien/update-profile"
    ]
    if(authProtected.includes(pathname)) {
        if (token) {return <Navigate to="/"/>}
    }
    if(protectedByToken.includes(pathname)){
        if(!token) {
           toast({
            title: "Error",
            description: "Kamu harus melakukan login terlebih dahulu",
            variant: "destructive"
           })
          return <Navigate to="/login"/>
        }
    } 

  return <Outlet />
}

export default ProtectedRoutes

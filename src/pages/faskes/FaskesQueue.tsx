import FaskesContainer from "@/components/FaskesContainer"
import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import MainButton from "@/components/MainButton"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import axiosWithConfig from "@/utils/api/axiosWithConfig"
import { useReservationStore } from "@/utils/states/reservation"
import { IResponse } from "@/utils/types/api"
import { Check } from "lucide-react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const FaskesQueue = () => {
  const {poli} = useParams()
  const {reservations,fetchReservationData} = useReservationStore()
  const {toast} = useToast()
  useEffect(() => {
    fetchReservationData()
  },[fetchReservationData])

  const checkin = async (id : number) => {
    try {
        const response = await axiosWithConfig.put(`/reservations/${id}`, {
            status: "Check In"
        })
        toast({
            title: "Success",
            description: (response.data as IResponse).message
        })
        await fetchReservationData()
    } catch (error) {
        toast({
            title: "Error",
            description: (error as Error).message,
            variant: "destructive"
        })
    }
  }

  const skip = async (id : number) => {
    try {
        const response = await axiosWithConfig.put(`/reservations/${id}`, {
            status: "Skipped"
        })
        toast({
            title: "Success",
            description: (response.data as IResponse).message
        })
        await fetchReservationData()
    } catch (error) {
        toast({
            title: "Error",
            description: (error as Error).message,
            variant: "destructive"
        })
    }
  }
  return (
    <FaskesLayout>
      <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
                <Link to={"/faskes/antrian/1"}>
                    <div className={`${poli === "1" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "1" ? "" : "text-white"} text-xl`}>Poli Umum</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/2"}>
                    <div className={`${poli === "2" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "2" ? "" : "text-white"} text-xl`}>Poli Gigi & Mulut</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/3"}>
                    <div className={`${poli === "3" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "3" ? "" : "text-white"} text-xl`}>Poli KIA</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/4"}>
                    <div className={`${poli === "4" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "4" ? "" : "text-white"} text-xl`}>UGD</li>
                    </div>
                </Link>
                <Separator className="my-3"/>
                <Link to={"/faskes/jadwal/add"}>
                    <div className={`cursor-pointer p-2 max-w-[90%] rounded-lg`}>
                        <li className={`text-white text-xl`}>Tambah Jadwal</li>
                    </div>
                </Link>
        </ul>
      </FaskesSidebar>
        {reservations.filter(item => item.poli_id ===  parseInt(poli!)).length > 0 ? (
            <FaskesContainer>
                <Table>
                    <TableHeader className="bg-[#92DBD8] sticky top-0">
                        <TableHead className="text-black text-center">No</TableHead>
                        <TableHead className="text-black text-center">Nama Pasien</TableHead>
                        <TableHead className="text-black text-center">Keluhan</TableHead>
                        <TableHead className="text-black text-center">Atur</TableHead>
                        <TableHead className="text-black text-center">Status</TableHead>
                        <TableHead className="text-black text-center">BPJS</TableHead>
                    </TableHeader>
                    <TableBody>
                        {reservations.filter(item => item.poli_id ===  parseInt(poli!)).map((item,index) => (
                            <TableRow className="text-center border-black">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item.nama}</TableCell>
                                <TableCell>{item.keluhan}</TableCell>
                                <TableCell className="flex items-center justify-center gap-3">
                                    <MainButton text="Check In" onClick={() => checkin(item.reservations_id)}/>
                                    <Button className="bg-red-500 hover:bg-red-700 duration-500" onClick={() => skip(item.reservations_id)}>Skip</Button>
                                </TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell className="flex justify-center items-center">{item.bpjs === true ? <Check /> : ""}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </FaskesContainer>
            
        ) : (
            <div className="flex w-full justify-center items-center">
                <h1 className="text-3xl">Data Not Found</h1>
            </div>
        )}
    </FaskesLayout>
  )
}

export default FaskesQueue

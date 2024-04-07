import FaskesContainer from "@/components/FaskesContainer"
import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import MainButton from "@/components/MainButton"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { deleteSchedule } from "@/utils/api/faskes/api"
import { ScheduleType, useSchedulesState } from "@/utils/states/schedules"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const FaskesSchedule = () => {
    const {poli} = useParams()
    const {schedules, fetchSchedules} = useSchedulesState()
    const {toast} = useToast()
    const navigate = useNavigate()
    useEffect(() => {
        fetchSchedules()
    },[poli])
    console.log(schedules)
    const renderDataByPoli = (): ScheduleType[] => {
        return schedules!.filter((item: ScheduleType) => {
            return item.poli === poli!.toLowerCase();
        });
    };
    const deleteData = async (id: number) => {
        try {
            const response = await deleteSchedule(id)
            toast({
                title: "Success",
                description: response.message
            })
            navigate(`/`)
        } catch (error) {
            toast({
                title: "Error",
                description: (error as Error).message
            })
        }
    }
  return (
    <FaskesLayout>
      <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
            <Link to={"/faskes/jadwal/umum"}>
                <div className={`${poli === "umum" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                    <li className={`${poli === "umum" ? "" : "text-white"} text-xl`}>Poli Umum</li>
                </div>
            </Link>
            <Link to={"/faskes/jadwal/gigi"}>
                <div className={`${poli === "gigi" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                    <li className={`${poli === "gigi" ? "" : "text-white"} text-xl`}>Poli Gigi & Mulut</li>
                </div>
            </Link>
            <Link to={"/faskes/jadwal/kia"}>
                <div className={`${poli === "kia" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                    <li className={`${poli === "kia" ? "" : "text-white"} text-xl`}>Poli KIA</li>
                </div>
            </Link>
            <Link to={"/faskes/jadwal/ugd"}>
                <div className={`${poli === "ugd" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                    <li className={`${poli === "ugd" ? "" : "text-white"} text-xl`}>UGD</li>
                </div>
            </Link>
            <Separator className="my-3"/>
            <Link to={"/faskes/jadwal/add"}>
                <div className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                    <li className={`text-white text-xl`}>Tambah Jadwal</li>
                </div>
            </Link>
        </ul>
      </FaskesSidebar>
      {renderDataByPoli().length < 1 ? (
            <>
                <div className="flex w-full justify-center items-center">
                    <h1 className="text-3xl">Data Not Found</h1>
                </div>
            </>
        ) : (
            <FaskesContainer >
                <Table>
                    <TableHeader className="bg-[#92DBD8] sticky top-0">
                        <TableHead className="text-black text-center">No</TableHead>
                        <TableHead className="text-black text-center">Hari</TableHead>
                        <TableHead className="text-black text-center">Jam Praktek</TableHead>
                        <TableHead className="text-black text-center">Kuota</TableHead>
                        <TableHead className="text-black text-center">Terisi</TableHead>
                        <TableHead className="text-black text-center"></TableHead>
                    </TableHeader>
                    <TableBody>
                        {renderDataByPoli().map((item,index) => (
                            <TableRow className="text-center border-black" key={item.schedule_id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item.hari}</TableCell>
                                <TableCell>{item.jam_mulai} - {item.jam_selesai}</TableCell>
                                <TableCell>{item.kuota}</TableCell>
                                <TableCell>12</TableCell>
                                <TableCell className="flex items-center justify-center gap-3">
                                    <MainButton text="Edit"/>
                                    <Button className="bg-red-500 hover:bg-red-700 duration-500" onClick={() => deleteData(item.schedule_id)}>Hapus</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </FaskesContainer>

        )}
    </FaskesLayout>
  )
}

export default FaskesSchedule

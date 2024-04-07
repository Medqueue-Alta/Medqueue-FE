import FaskesContainer from "@/components/FaskesContainer"
import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import MainButton from "@/components/MainButton"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SchedulesSchema } from "@/utils/api/faskes/type"
import { useSchedulesState } from "@/utils/states/schedules"
import { useUserState } from "@/utils/states/user"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
const FaskesSchedule = () => {
    const {poli} = useParams()
    const {user,fetchUser} = useUserState()
    const {schedules, fetchSchedules} = useSchedulesState()
    useEffect(() => {
        fetchUser()
        fetchSchedules()
    },[poli])
    const renderDataByPoli = (): SchedulesSchema[] => {
        return schedules!.filter((item: SchedulesSchema) => {
            const poliParts = item.poli.split(" ");
            const poliName = poliParts.length === 2 ? poliParts[1].toLowerCase() : item.poli.toLowerCase();
            return poliName === poli!.toLowerCase();
        });
    };
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
                                    <TableRow className="text-center border-black" key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.hari}</TableCell>
                                        <TableCell>{item.jam_mulai} - {item.jam_selesai}</TableCell>
                                        <TableCell>{item.kuota}</TableCell>
                                        <TableCell>12</TableCell>
                                        <TableCell className="flex items-center justify-center gap-3">
                                            <MainButton text="Edit"/>
                                            <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
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

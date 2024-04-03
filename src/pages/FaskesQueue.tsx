import FaskesContainer from "@/components/FaskesContainer"
import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import MainButton from "@/components/MainButton"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check } from "lucide-react"
import { Link, useParams } from "react-router-dom"

const FaskesQueue = () => {
  const {poli} = useParams()
  return (
    <FaskesLayout>
      <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
                <Link to={"/faskes/antrian/umum"}>
                    <div className={`${poli === "umum" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "umum" ? "" : "text-white"} text-xl`}>Poli Umum</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/gigi"}>
                    <div className={`${poli === "gigi" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "gigi" ? "" : "text-white"} text-xl`}>Poli Gigi & Mulut</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/kia"}>
                    <div className={`${poli === "kia" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "kia" ? "" : "text-white"} text-xl`}>Poli KIA</li>
                    </div>
                </Link>
                <Link to={"/faskes/antrian/ugd"}>
                    <div className={`${poli === "ugd" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${poli === "ugd" ? "" : "text-white"} text-xl`}>UGD</li>
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
      <FaskesContainer >
        <Table>
            <TableHeader className="bg-[#92DBD8]">
                <TableHead className="text-black text-center">No</TableHead>
                <TableHead className="text-black text-center">Nama Pasien</TableHead>
                <TableHead className="text-black text-center">Keluhan</TableHead>
                <TableHead className="text-black text-center">Atur</TableHead>
                <TableHead className="text-black text-center">Status</TableHead>
                <TableHead className="text-black text-center">BPJS</TableHead>
            </TableHeader>
            <TableBody>
                <TableRow className="text-center border-black">
                    <TableCell>1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Sakit Kepala Sudah 3 Hari</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Check In"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Skip</Button>
                    </TableCell>
                    <TableCell>Check In</TableCell>
                    <TableCell className="flex justify-center items-center"><Check /></TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>2</TableCell>
                    <TableCell>Foo Bar</TableCell>
                    <TableCell>Batuk Pilek</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Check In"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Skip</Button>
                    </TableCell>
                    <TableCell>Check In</TableCell>
                    <TableCell className="flex justify-center items-center"></TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>3</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Sakit Kepala Sudah 3 Hari</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Check In"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Skip</Button>
                    </TableCell>
                    <TableCell>Skipped</TableCell>
                    <TableCell className="flex justify-center items-center"><Check /></TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>4</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Sakit Kepala Sudah 3 Hari</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Check In"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Skip</Button>
                    </TableCell>
                    <TableCell>Skipped</TableCell>
                    <TableCell className="flex justify-center items-center"></TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>5</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Sakit Kepala Sudah 3 Hari</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Check In"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Skip</Button>
                    </TableCell>
                    <TableCell>Check In</TableCell>
                    <TableCell className="flex justify-center items-center"><Check /></TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </FaskesContainer>
    </FaskesLayout>
  )
}

export default FaskesQueue

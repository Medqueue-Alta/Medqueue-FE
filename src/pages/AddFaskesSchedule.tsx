import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import FaskesContainer from "@/components/FaskesContainer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import MainButton from "@/components/MainButton"
import { Separator } from "@/components/ui/separator"
import { Link, useParams, useLocation } from "react-router-dom"

const AddFaskesSchedule = () => {
  const {poli} = useParams()
  const location = useLocation()
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
                    <div className={`${location.pathname === "/faskes/jadwal/add" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${location.pathname === "/faskes/jadwal/add" ? "" : "text-white"} text-xl`}>Tambah Jadwal</li>
                    </div>
                </Link>
        </ul>
      </FaskesSidebar>
      <FaskesContainer title="Tambah Jadwal">
        <div className="mt-3 w-[40%]">
          <div className="mb-3">
            <Label>Poli Klinik</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Poli Klinik" />
              </SelectTrigger>
              <SelectContent>
                 <SelectGroup>
                    <SelectLabel>Poli Klinik</SelectLabel>
                    <SelectItem value="Poli Umum">Poli Umum</SelectItem>
                    <SelectItem value="Poli Gigi & Mulut">Poli Gigi & Mulut</SelectItem>
                    <SelectItem value="Poli KIA">Poli KIA</SelectItem>
                    <SelectItem value="UGD">UGD</SelectItem>
                 </SelectGroup>
                </SelectContent>
              </Select>
          </div>
          <div className="mb-3">
            <Label>Hari</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Hari" />
              </SelectTrigger>
              <SelectContent>
                 <SelectGroup>
                    <SelectLabel>Hari</SelectLabel>
                    <SelectItem value="Poli Umum">Senin</SelectItem>
                    <SelectItem value="Poli Gigi & Mulut">Selasa</SelectItem>
                    <SelectItem value="Poli KIA">Rabu</SelectItem>
                    <SelectItem value="UGD">Kamis</SelectItem>
                    <SelectItem value="UGD">Jumat</SelectItem>
                    <SelectItem value="UGD">Sabtu</SelectItem>
                    <SelectItem value="UGD">Minggu</SelectItem>
                 </SelectGroup>
                </SelectContent>
              </Select>
          </div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="w-1/2">
              <Label>Waktu Mulai</Label>
              <Input type="time" placeholder="Waktu Mulai"/>
            </div>
            <div className="w-1/2">
              <Label>Waktu Selesai</Label>
              <Input type="time" placeholder="Waktu Selesai"/>
            </div>
          </div>
          <div className="mb-6">
              <Label>Kuota Antrian</Label>
              <Input type="number" placeholder="Kuota Antrian" min={1}/>
          </div>
          <div className="text-center">
            <MainButton text="Tambah Jadwal"/>
          </div>
        </div>
      </FaskesContainer>
   </FaskesLayout>
  )
}

export default AddFaskesSchedule
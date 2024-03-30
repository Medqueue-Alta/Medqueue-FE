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

const AddFaskesSchedule = () => {
  return (
<FaskesLayout>
      <FaskesSidebar nav={["Poli Umum","Poli Gigi & Mulut", "Poli KIA", "UGD"]}/>
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

import FaskesContainer from "@/components/FaskesContainer"
import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import MainButton from "@/components/MainButton"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
const FaskesSchedule = () => {
  return (
    <FaskesLayout>
      <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
            <div className="cursor-pointer bg-[#92DBD8] p-2 max-w-[90%] rounded-lg">
                <li className="text-2xl">Poli Umum</li>
            </div>
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-white text-2xl">Poli Gigi & Mulut</li>
            </div>
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-white text-2xl">Poli KIA</li>
            </div>
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-white text-2xl">UGD</li>
            </div>
            <Separator className="my-3"/>
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-2xl text-white">Tambah Jadwal</li>
            </div>
        </ul>
      </FaskesSidebar>
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
                <TableRow className="text-center border-black">
                    <TableCell>1</TableCell>
                    <TableCell>Senin</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>2</TableCell>
                    <TableCell>Selasa</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>3</TableCell>
                    <TableCell>Rabu</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>4</TableCell>
                    <TableCell>Kamis</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>5</TableCell>
                    <TableCell>Jumat</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>6</TableCell>
                    <TableCell>Sabtu</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-center border-black">
                    <TableCell>7</TableCell>
                    <TableCell>Minggu</TableCell>
                    <TableCell>08:30 - 19:00</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className="flex items-center justify-center gap-3">
                        <MainButton text="Edit"/>
                        <Button className="bg-red-500 hover:bg-red-700 duration-500">Hapus</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </FaskesContainer>
    </FaskesLayout>
  )
}

export default FaskesSchedule

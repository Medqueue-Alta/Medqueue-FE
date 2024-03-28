import AuthLayout from "@/components/authLayout"
import {Label} from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
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

const Register = () => {
  const [date, setDate] = useState<Date>()
  return (
        <AuthLayout>
            <h1 className="text-2xl mt-2">Register</h1>
            <div className="w-full p-10">
                <div className="mb-2">
                    <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                    <Input placeholder="Nama Lengkap" id="namaLengkap"/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Email" id="email" type="email"/>
                </div>
                <div className="mb-2 flex justify-between items-center gap-3">
                    <div className="w-1/2">
                        <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                        <Input placeholder="Tempat Lahir" id="tempatLahir"/>
                    </div>
                    <div className="w-1/2">
                        <Label>Tanggal Lahir</Label>
                        <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-between text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                            >
                            {date ? format(date, "PP") : <span>Tanggal Lahir</span>}
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                                data-testid="calendar"
                                mode="single"
                                // selected={field.value}
                                onSelect={(date) => {
                                setDate(date)
                                }}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                captionLayout="dropdown-buttons"
                                fromDate={new Date("1900-01-01")}
                                toDate={new Date()}
                                initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="mb-2 flex items-center w-full gap-3">
                    <div className="w-1/2">
                    <Label htmlFor="gender">Jenis Kelamin</Label>
                        <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Jenis Kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Jenis Kelamin</SelectLabel>
                            <SelectItem value="L">Laki - Laki</SelectItem>
                            <SelectItem value="P">Perempuan</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                    <div className="w-1/2">
                    <Label htmlFor="goldar">Golongan Darah</Label>
                        <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Golongan Darah" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Golongan Darah</SelectLabel>
                            <SelectItem value="A">A</SelectItem>
                            <SelectItem value="B">B</SelectItem>
                            <SelectItem value="O">O</SelectItem>
                            <SelectItem value="AB">AB</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="mb-2">
                    <Label htmlFor="nik">NIK</Label>
                    <Input placeholder="NIK" id="nik"/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="bpjs">No BPJS</Label>
                    <Input placeholder="No BPJS" id="bpjs"/>
                </div>
                <div>
                    <Label htmlFor="telp">No Telpon</Label>
                    <Input placeholder="No Telpon" id="telp" type="tel"/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="Password" id="password" type="password"/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
                    <Input placeholder="Password Confirmation" id="passwordConfirmation" type="password"/>
                </div>
            </div>
            <MainButton text="Register" />
        </AuthLayout>
  )
}

export default Register

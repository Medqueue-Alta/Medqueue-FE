import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import FaskesContainer from "@/components/FaskesContainer"
import { Input } from "@/components/ui/input"
import MainButton from "@/components/MainButton"
import { Separator } from "@/components/ui/separator"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SchedulesSchema, schedulesSchema } from "@/utils/api/faskes/type"
import { Form } from "@/components/ui/form"
import { CustomFormField, CustomFormSelect } from "@/components/CustomFormField"
import { postSchedules } from "@/utils/api/faskes/api"
import { useToast } from "@/components/ui/use-toast"
import { setAxiosConfig } from "@/utils/api/axiosWithConfig"

const EditFaskesSchedule = () => {
  const {poli,id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const {toast} = useToast()
  const form = useForm<SchedulesSchema>({
    resolver: zodResolver(schedulesSchema),
    defaultValues: {
      poli: "",
      hari: "",
      jam_mulai: "",
      jam_selesai: "",
      kuota: ""
    }
  })
  const poliKlinik = [
    {
      label: "Poli Umum",
      value: "umum"
    },
    {
      label: "Poli Gigi & Mulut",
      value: "gigi"
    },
    {
      label: "Poli KIA",
      value: "kia"
    },
    {
      label: "UGD",
      value: "ugd"
    },
  ]
  const hari = [
    {
      label: "Senin",
      value: "Senin"
    },
    {
      label: "Selasa",
      value: "Selasa"
    },
    {
      label: "Rabu",
      value: "Rabu"
    },
    {
      label: "Kamis",
      value: "Kamis"
    },
    {
      label: "Jumat",
      value: "Jumat"
    },
    {
      label: "Sabtu",
      value: "Sabtu"
    },
    {
      label: "Minggu",
      value: "Minggu"
    },
  ]
  const addSchedule = async (body : SchedulesSchema) => {
    try {
      console.log(body)
      setAxiosConfig(localStorage.getItem("token")!)
      const response = await postSchedules(body)
      toast({
        title: "Success",
        description: response.message
      })
      navigate("/")
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive"
      })
    }
  }
  console.log(poli,id)
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
      <FaskesContainer title="Edit Jadwal">
        <div className="mt-3 w-[40%]">
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(addSchedule)}>
              <div className="mb-3">
                <CustomFormSelect label="Poli Klinik" placeholder="Poli Klinik" control={form.control} name="poli" disabled options={poliKlinik} />
              </div>
              <div className="mb-3">
                  <CustomFormSelect label="Hari" placeholder="Hari" control={form.control} name="hari" disabled={form.formState.isSubmitting} options={hari} />
              </div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="w-1/2">
                  <CustomFormField
                    control={form.control}
                    name="jam_mulai"
                    label="Jam Mulai"
                  >
                    {(field) => (
                      <Input 
                        {...field}
                        type="time" 
                        placeholder="Jam Mulai"
                        aria-disabled={form.formState.isSubmitting}
                        disabled={form.formState.isSubmitting}
                        value={field.value as string} 
                      />
                    )}
                  </CustomFormField>
                </div>
                <div className="w-1/2">
                <CustomFormField
                    control={form.control}
                    name="jam_selesai"
                    label="Jam Selesai"
                  >
                    {(field) => (
                      <Input 
                        {...field}
                        type="time" 
                        placeholder="Jam Selesai"
                        aria-disabled={form.formState.isSubmitting}
                        disabled={form.formState.isSubmitting}
                        value={field.value as string} 
                      />
                    )}
                  </CustomFormField>
                </div>
              </div>
              <div className="mb-6">
                <CustomFormField
                  control={form.control}
                  name="kuota"
                  label="Kuota"
                >
                  {(field) => (
                    <Input 
                      {...field}
                      type="number" 
                      placeholder="Kuota"
                      aria-disabled={form.formState.isSubmitting}
                      disabled={form.formState.isSubmitting}
                      value={field.value as string} 
                    />
                  )}
                </CustomFormField>
              </div>
              <div className="text-center">
                <MainButton text="Tambah Jadwal" type="submit"/>
              </div>
            </form>
          </Form>
        </div>
      </FaskesContainer>
   </FaskesLayout>
  )
}

export default EditFaskesSchedule
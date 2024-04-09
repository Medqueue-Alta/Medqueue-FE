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

const AddFaskesSchedule = () => {
  const {poli} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const {toast} = useToast()
  const form = useForm<SchedulesSchema>({
    resolver: zodResolver(schedulesSchema),
    defaultValues: {
      poli_id: 1,
      hari: "",
      jam_mulai: "",
      jam_selesai: "",
      kuota: 0
    }
  })
  const poliKlinik = [
    {
      label: "Poli Umum",
      value: "1"
    },
    {
      label: "Poli Gigi & Mulut",
      value: "2"
    },
    {
      label: "Poli KIA",
      value: "3"
    },
    {
      label: "UGD",
      value: "4"
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
                    <div className={`${location.pathname === "/faskes/jadwal/add" ? "bg-[#92DBD8]" : ""} cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
                        <li className={`${location.pathname === "/faskes/jadwal/add" ? "" : "text-white"} text-xl`}>Tambah Jadwal</li>
                    </div>
                </Link>
        </ul>
      </FaskesSidebar>
      <FaskesContainer title="Tambah Jadwal">
        <div className="mt-3 w-[40%]">
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(addSchedule)}>
              <div className="mb-3">
                <CustomFormSelect label="Poli Klinik" placeholder="Poli Klinik" control={form.control} name="poli_id" disabled={form.formState.isSubmitting} options={poliKlinik} />
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

export default AddFaskesSchedule

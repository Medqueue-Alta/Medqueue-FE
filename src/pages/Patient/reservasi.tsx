import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

import {
  CustomFormDatePicker,
  CustomFormSelect,
  CustomFormTextArea,
} from "@/components/PatientCustomFormField";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";
import PatientReservationCard from "@/components/PatientReservationCard";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  addNewReservation,
  getPatient,
  getSchedule,
} from "@/utils/api/patient/api";
import { IPatient, ScheduleData } from "@/utils/api/patient/type";
import {
  ReservationSchema,
  reservationSchema,
} from "@/utils/api/patient/form-type";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";

const PatientReservation = () => {
  const [user, setUser] = useState<IPatient>();
  const [jadwal, setJadwal] = useState<ScheduleData[]>([]);
  const [jadwalBaru, setJadwalBaru] = useState<ScheduleData[]>([]);
  const [day, setDay] = useState("");
  const [prevJadwalBaruLength, setPrevJadwalBaruLength] = useState<number>(0);

  // List Poli di hardcode untuk saat ini
  const poli = [
    {
      label: "Poli Umum",
      value: "1",
    },
    {
      label: "Poli Gigi & Mulut",
      value: "2",
    },
    {
      label: "Poli KIA",
      value: "3",
    },
    {
      label: "UGD",
      value: "4",
    },
  ];

  const poliOptions = poli.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  const form = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      poli: "",
      Hari: "",
      Jadwal: "",
      keluhan: "",
      BPJS: false,
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPatient();
        setUser(response.data);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const poliValue = form.getValues("poli");

    const fetchJadwal = async () => {
      try {
        setAxiosConfig(localStorage.getItem("token")!);
        const response = await getSchedule(poliValue);
        setJadwal(response.data);
        console.log(jadwal);
      } catch (error) {
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    };

    // Jika Poli sudah terisi, jalankan fungsi fetchJadwal
    if (poliValue) {
      fetchJadwal();
    }
  }, [form.getValues("poli")]);

  useEffect(() => {
    // tanggal di ekstrak dari value yang di input dari datepicker
    const tanggal = form.getValues("Hari");

    if (tanggal) {
      // Simpan Hari yang didapatkan kedalam konstant baru lalu ubah menjadi
      // format Indonesia
      const selectedDate = new Date(tanggal);
      const selectedDay = selectedDate.toLocaleString("id-ID", {
        weekday: "long",
      });

      // Simpan hari yang dipilih dalam state selectedDay
      setDay(selectedDay.toLowerCase());
    }
  }, [form.getValues("Hari")]);

  useEffect(() => {
    // Perintah baru untuk melakukan penyaringan jadwal setelah
    // selectedDay diperbarui
    console.log(day)
    if (day !== "") {
      const sortedJadwal = jadwal.filter(
        (jadwal) => jadwal.hari.toLowerCase() === day
      );
      setJadwalBaru(sortedJadwal);
      console.log(jadwalBaru)
    }
  }, [day, jadwal]);

  useEffect(() => {
    setPrevJadwalBaruLength(jadwalBaru.length);
  }, [jadwalBaru]);

  useEffect(() => {
    if (prevJadwalBaruLength === 0 && jadwalBaru.length === 0) {
      toast({
        title: "Error",
        description: "Tidak ada jadwal tersedia untuk hari ini.",
        variant: "destructive",
      });
    }
  }, [jadwalBaru, prevJadwalBaruLength]);

  async function onSubmit(data: ReservationSchema) {
    try {
      const result = await addNewReservation(data);

      toast({
        title: "Success",
        description: result.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <div className="w-full my-5">
          <PatientInformationCard
            nama={user?.nama}
            NIK={user?.no_nik}
            BJPS={user?.no_bpjs}
          />
        </div>
        <div className="w-full my-5">
          <PatientReservationCard>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <CustomFormSelect
                  control={form.control}
                  name="poli"
                  label="Poli Klinik"
                  placeholder="Poli Klinik"
                  options={poliOptions}
                />
                <CustomFormDatePicker
                  control={form.control}
                  name="Hari"
                  label="Tanggal Daftar"
                  placeholder="Tanggal Daftar"
                  disabled={
                    form.formState.isSubmitting || form.watch("poli") === ""
                  }
                />
                <CustomFormSelect
                  control={form.control}
                  name="Jadwal"
                  label="Jadwal"
                  placeholder="Pilih Jadwal"
                  options={jadwalBaru.map((jadwal) => ({
                    label: `${jadwal.hari} - ${jadwal.jam_mulai}`,
                    value: jadwal.schedule_id.toString(),
                  }))}
                  disabled={
                    form.formState.isSubmitting || form.watch("Hari") === ""
                  }
                />
                <CustomFormTextArea
                  control={form.control}
                  name="keluhan"
                  label="Keluhan"
                  placeholder="Keluhan Anda"
                  disabled={
                    form.formState.isSubmitting || form.watch("Jadwal") === ""
                  }
                  aria-disabled={form.formState.isSubmitting}
                />
                <FormField
                  control={form.control}
                  name="BPJS"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={
                            form.formState.isSubmitting ||
                            form.watch("Jadwal") === ""
                          }
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Centang Jika Menggunakan BPJS</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-max self-center bg-[#089993]"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </PatientReservationCard>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientReservation;

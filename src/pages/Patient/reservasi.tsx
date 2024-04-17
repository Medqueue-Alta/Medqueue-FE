import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";


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
  getSchedules,
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

const navigate = useNavigate();

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
      poli_id: "",
      tanggal_kunjungan: "",
      id_jadwal: "",
      keluhan: "",
      bpjs: false,
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
    const poliValue = form.getValues("poli_id");

    const fetchJadwal = async () => {
      try {
        setAxiosConfig(localStorage.getItem("token")!);
        const response = await getSchedules(poliValue);
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
  }, [form.getValues("poli_id")]);

  useEffect(() => {
    // tanggal di ekstrak dari value yang di input dari datepicker
    const tanggal = form.getValues("tanggal_kunjungan");

    if (tanggal) {
      // Simpan Hari yang didapatkan kedalam konstant baru lalu ubah menjadi
      // format Indonesia
      const selectedDate = new Date(tanggal);
      const selectedDay = selectedDate.toLocaleString("en-US", {
        weekday: "long",
      });

      // Simpan hari yang dipilih dalam state selectedDay
      setDay(selectedDay.toLowerCase());
      
    }
  }, [form.getValues("tanggal_kunjungan")]);

  useEffect(() => {
    // Perintah baru untuk melakukan penyaringan jadwal setelah
    // selectedDay diperbarui
    console.log(jadwal);
    console.log(day);
    if (day !== "") {
      
      const sortedJadwal = jadwal.filter(
        (jadwal) => jadwal.hari.toLowerCase() === day
      );
      setJadwalBaru(sortedJadwal);
      console.log(jadwalBaru);
    }
  }, [day, jadwal]);

  useEffect(() => {
    setPrevJadwalBaruLength(jadwalBaru.length);
  }, [jadwalBaru]);

  useEffect(() => {
    if (prevJadwalBaruLength === 0 && jadwalBaru.length === 0) {
      toast({
        title: "Error",
        description:
          "Tidak ada jadwal tersedia untuk hari ini. Geser notifikasi ini dan coba kembali",
        variant: "destructive",
      });
    }
  }, [jadwalBaru, prevJadwalBaruLength]);

  async function onSubmit(data: ReservationSchema) {
    try {
      // Konversikan format tanggal sesuai dengan kebutuhan API
      const formattedDate = formatDateForAPI(data.tanggal_kunjungan);

      // Ganti data form tanggal_kunjungan dengan data dengan format baru 
      const newData = { ...data, tanggal_kunjungan: formattedDate };

      const result = await addNewReservation(newData);

      navigate("/pasien/home");
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

  function formatDateForAPI(date: string): string {
    // Ubah format tanggal sesuai kebutuhan API di sini
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Tambah 1 karena bulan dimulai dari 0
    const day = dateObject.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}T17:00:00.000Z`;
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
                  name="poli_id"
                  label="Poli Klinik"
                  placeholder="Poli Klinik"
                  options={poliOptions}
                  id="poli-select"
                />
                <CustomFormDatePicker
                  control={form.control}
                  name="tanggal_kunjungan"
                  label="Tanggal Daftar"
                  placeholder="Tanggal Daftar"
                  disabled={
                    form.formState.isSubmitting || form.watch("poli_id") === ""
                  }
                  id="tanggal-select"
                />
                <CustomFormSelect
                  control={form.control}
                  name="id_jadwal"
                  label="Jadwal"
                  placeholder="Pilih Jadwal"
                  options={jadwalBaru.map((jadwal) => ({
                    label: `${jadwal.hari} - ${jadwal.jam_mulai}`,
                    value: jadwal.schedule_id.toString(),
                  }))}
                  disabled={
                    form.formState.isSubmitting ||
                    form.watch("tanggal_kunjungan") === ""
                  }
                  id="jadwal-select"
                />
                <CustomFormTextArea
                  control={form.control}
                  name="keluhan"
                  label="Keluhan"
                  placeholder="Keluhan Anda"
                  disabled={
                    form.formState.isSubmitting ||
                    form.watch("id_jadwal") === ""
                  }
                  aria-disabled={form.formState.isSubmitting}
                  id="keluhan-textarea"
                />
                <FormField
                  control={form.control}
                  name="bpjs"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4" id="bpjs-checkbox">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={
                            form.formState.isSubmitting ||
                            form.watch("id_jadwal") === ""
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
                  id="sumbit-btn"
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

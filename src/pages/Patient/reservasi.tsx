import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
import {
  ReservationSchema,
  reservationSchema,
  ScheduleData,
} from "@/utils/api/patient/type";

const PatientReservation = () => {
  const [patient, setPatient] = useState("");
  const [nik, setNIK] = useState("");
  const [bpjs, setBPJS] = useState("");
  const [jadwal, setJadwal] = useState<ScheduleData[]>([]);
  const [jadwalBaru, setJadwalBaru] = useState<ScheduleData[]>([]);
  const [day, setDay] = useState("");

  // List Poli di hardcode untuk saat ini
  const poli = [
    {
      label: "Poli Umum",
      value: "Poli Umum",
    },
    {
      label: "Poli Gigi & Mulut",
      value: "Poli Gigi & Mulut",
    },
    {
      label: "Poli KIA",
      value: "Poli KIA",
    },
    {
      label: "UGD",
      value: "UGD",
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
    const fetchData = async () => {
      try {
        const response = await getPatient();
        setPatient(response.data.nama);
        setNIK(response.data.no_nik);
        setBPJS(response.data.no_bpjs);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const response = await getSchedule();
        setJadwal(response.data);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    };

    const poli = form.getValues("poli");

    // Jika Poli sudah terisi, jalankan fungsi fetchJadwal
    if (poli) {
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
    if (day !== "") {
      const sortedJadwal = jadwal.filter(
        (jadwal) => jadwal.hari.toLowerCase() === day
      );
      setJadwalBaru(sortedJadwal);
    }
  }, [day, jadwal]);

  async function onSubmit(data: ReservationSchema) {
    try {
      const result = await addNewReservation(data);

      toast(result.message);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <div className="w-full my-5">
          <PatientInformationCard nama={patient} NIK={nik} BJPS={bpjs} />
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
                    label: `${jadwal.hari} - ${jadwal.jam_praktek}`,
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

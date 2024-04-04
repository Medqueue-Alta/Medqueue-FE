import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  CustomFormSelect,
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
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
=======
import { toast } from "@/components/ui/use-toast";

import { ReservationSchema, reservationSchema } from "@/utils/api/patient/reservation-type";
>>>>>>> 54d5ba48b3a095e8d04b0f6cd4fa36248d3621f3

import {
  ReservationSchema,
  reservationSchema,
} from "@/utils/api-list/patient/reservation-type";

import { toast } from "sonner";
import { addNewReservation } from "@/utils/api-list/patient/api";

const PatientReservation = () => {
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

  const Hari = [
    {
      label: "Senin",
      value: "Senin",
    },
    {
      label: "Selasa",
      value: "Selasa",
    },
    {
      label: "Rabu",
      value: "Rabu",
    },
    {
      label: "Kamis",
      value: "Kamis",
    },
    {
      label: "Jumat",
      value: "Jumat",
    },
  ];

  const hariOptions = Hari.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  const jadwal = [
    {
      label: "Pagi",
      value: "pagi",
    },
    {
      label: "Siang",
      value: "siang",
    },
    {
      label: "Malam",
      value: "malam",
    },
  ];

  const jadwalOptions = jadwal.map((option) => ({
    label: option.label,
    value: option.value,
  }));

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
        <PatientInformationCard
          nama="John Doe"
          NIK="123456789"
          BJPS="1234556"
        />
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
              {/* <CustomFormDatePicker
                control={form.control}
                name="Hari"
                label="Tanggal Daftar"
                placeholder="Tanggal Daftar"
              /> */}
              <CustomFormSelect
                control={form.control}
                name="Hari"
                label="Hari"
                placeholder="Hari"
                options={hariOptions}
              />

              <CustomFormSelect
                control={form.control}
                name="Jadwal"
                label="Jadwal"
                placeholder="Jadwal"
                options={jadwalOptions}
              />
              <FormField
                control={form.control}
                name="keluhan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">Keluhan</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Keluhan"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Centang Jika Menggunakan BPJS</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-max self-center bg-[#089993]">
                Submit
              </Button>
            </form>
          </Form>
        </PatientReservationCard>
      </div>
    </PatientLayout>
  );
};

export default PatientReservation;

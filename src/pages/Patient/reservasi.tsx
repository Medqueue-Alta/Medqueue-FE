import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { CustomFormDatePicker } from "@/components/CustomFormField";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";
import PatientReservationCard from "@/components/ReservationCard";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

import { getPatient } from "@/utils/api/patient/api";
import {
  ReservationSchema,
  reservationSchema,
} from "@/utils/api/patient/reservation-type";

const PatientReservation = () => {
  const [patient, setPatient] = useState("");
  const [nik, setNIK] = useState("");
  const [bpjs, setBPJS] = useState("");

  const form = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      Poli: "",
      Jadwal: "",
      Keluhan: "",
      BPJS: false,
    },
  });

  function onSubmit(data: z.infer<typeof reservationSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPatient();
        setPatient(response.nama);
        setNIK(response.no_nik);
        setBPJS(response.no_bpjs);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    };

    fetchData();
  }, []);

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <PatientInformationCard nama={patient} NIK={nik} BJPS={bpjs} />
        <PatientReservationCard>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="Poli"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">
                      Poli Klinik
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Poli Klinik" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Poli Umum">Poli Umum</SelectItem>
                        <SelectItem value="Poli Gigi & Mulut">
                          Poli GIgi & Mulut
                        </SelectItem>
                        <SelectItem value="Poli KIA">Poli KIA</SelectItem>
                        <SelectItem value="UGD">UGD</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <CustomFormSelect
                control={form.control}
                name="Poli"
                label="Poli Klinik"
                placeholder="Poli Klinik"
                options={Poli}
              /> */}
              <CustomFormDatePicker
                control={form.control}
                name="Hari"
                label="Tanggal Daftar"
                placeholder="Tanggal Daftar"
              />
              <FormField
                control={form.control}
                name="Jadwal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">Jadwal</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Jadwal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <CustomFormSelect
                control={form.control}
                name="Jadwal"
                label="Jadwal"
                placeholder="Jadwal"
                options={Jadwal}
              /> */}
              <FormField
                control={form.control}
                name="Keluhan"
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

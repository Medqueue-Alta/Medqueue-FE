import * as z from "zod";

export const reservationSchema = z.object({
  poli_klinik: z.string().min(1, { message: "Please Choose The Clinic" }),
  tanggal_daftar: z.date({ required_error: "Please Choose The Date" }),
  jadwal: z.date({ required_error: "Please Choose The Schedule" }),
  keluhan: z.string().min(1, { message: "Please Enter Your Symptoms" }),
  bpjs: z.boolean().optional(),
});
  

export type ReservationSchema = z.infer<typeof reservationSchema>;

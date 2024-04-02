import * as z from "zod";

export const reservationSchema = z.object({
  Poli: z.string().min(1, { message: "Please Choose The Clinic" }),
  Hari: z.date({ required_error: "Please Choose The Date" }),
  Jadwal: z.string().min(1, { message: "Please Choose The Schedule" }),
  Keluhan: z.string().min(1, { message: "Please Enter Your Symptoms" }),
  BPJS: z.boolean().default(false).optional(),
});
  

export type ReservationSchema = z.infer<typeof reservationSchema>;

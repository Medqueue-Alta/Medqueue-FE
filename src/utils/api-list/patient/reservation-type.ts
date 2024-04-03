import * as z from "zod";

export const reservationSchema = z.object({
  Poli: z.string().min(1, { message: "Please choose the clinic" }),
  Hari: z.date({ required_error: "Please choose the date" }),
  Jadwal: z.string().min(1, { message: "Please choose the schedule" }),
  Keluhan: z
    .string()
    .min(10, {
      message: "Symptoms Must Be at least 10 characters.",
    })
    .max(160, {
      message: "Symptoms must not be longer than 30 characters.",
    }),
  BPJS: z.boolean().default(false).optional(),
});
  

export type ReservationSchema = z.infer<typeof reservationSchema>;

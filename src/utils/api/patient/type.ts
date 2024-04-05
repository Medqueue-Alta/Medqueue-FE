import * as z from "zod";

export const reservationSchema = z.object({
  poli: z
    .string()
    .min(1, { message: "Silahkan pilih Poli Klinik yang sesuai" }),
  Hari: z.string().min(1, { message: "Silahkan pilih Hari yang sesuai" }),
  Jadwal: z.string().min(1, { message: "Silahkan pilih jadwal yang sesuai" }),
  keluhan: z
    .string()
    .min(10, {
      message: "Mohon isi keluhan anda minimal 10 karakter",
    })
    .max(160, {
      message:
        "Keluhan tidak perlu sampai 160 karakter. Silahkan isi lebih ringkas",
    }),
  BPJS: z.boolean().default(false).optional(),
});

export type ReservationSchema = z.infer<typeof reservationSchema>;

export interface IPatient {
  nama: string;
  no_nik: string;
  no_bpjs: string;
}

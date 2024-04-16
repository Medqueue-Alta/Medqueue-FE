import * as z from "zod";

export const reservationSchema = z.object({
  poli_id: z
    .string()
    .min(1, { message: "Silahkan pilih Poli Klinik yang sesuai" }),
  tanggal_kunjungan: z.string().min(1, { message: "Silahkan pilih Hari yang sesuai" }),
  id_jadwal: z.string().min(1, { message: "Silahkan pilih jadwal yang sesuai" }),
  keluhan: z
    .string()
    .min(10, {
      message: "Mohon isi keluhan anda minimal 10 karakter",
    })
    .max(160, {
      message:
        "Keluhan tidak perlu sampai 160 karakter. Silahkan isi lebih ringkas",
    }),
  bpjs: z.boolean().default(false).optional(),
});

export const updateProfileSchema = z
  .object({
    nama: z.string().min(1, { message: "Nama Lengkap tidak boleh kosong" }),
    email: z
      .string()
      .min(1, { message: "Email tidak boleh kosong" })
      .email({ message: "Format email tidak valid" }),
    tempat_lahir: z
      .string()
      .min(1, { message: "Tempat Lahir tidak boleh kosong" }),
    tgl_lahir: z
      .date({ required_error: "Tanggal Lahir tidak boleh kosong" })
      .min(new Date("1900-01-01"), {
        message: "Tanggal Lahir tidak boleh kurang dari 1900-01-01",
      })
      .max(new Date(), {
        message: "Tanggal Lahir tidak boleh lebih dari hari ini",
      }),
    gender: z.string().min(1, { message: "Jenis Kelamin tidak boleh kosong" }),
    no_nik: z.string().min(1, { message: "No NIK tidak boleh kosong" }),
    no_bpjs: z.string().optional(),
    gol_darah: z.string().optional(),
    no_telepon: z.string().optional(),
    password: z
      .string()
      .min(8, { message: "Password harus memilik minimal 8 karakter" })
      .max(20, {
        message: "Password tidak boleh memiliki lebih dari 20 karakter",
      })
      .regex(/.*[A-Z].*/, {
        message: "Password paling tidak memiliki 1 huruf kapital",
      })
      .regex(/.*\d.*/, { message: "Password paling tidak memiliki 1 angka" }),
    passwordConfirmation: z
      .string()
      .min(1, { message: "Konfirmasi Password tidak boleh kosong" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password and Konfirmasi Password tidak sama",
    path: ["passwordConfirmation"],
  });

export type ReservationSchema = z.infer<typeof reservationSchema>;
export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;


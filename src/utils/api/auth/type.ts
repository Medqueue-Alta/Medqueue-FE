import * as z from "zod"

export const registerSchema = z.object({
    nama: z.string().min(1, {message: "Nama Lengkap tidak boleh kosong"}),
    email: z.string().min(1, {message: "Email tidak boleh kosong"}).email({message: "Format email tidak valid"}),
    tempat_lahir: z.string().min(1, {message: "Tempat Lahir tidak boleh kosong"}),
    tgl_lahir: z.date({required_error: "Tanggal Lahir tidak boleh kosong"}).min(new Date("1900-01-01",), {message: "Tanggal Lahir tidak boleh kurang dari 1900-01-01"}).max(new Date(), {message: "Tanggal Lahir tidak boleh lebih dari hari ini"}),
    gender: z.string().min(1, {message: "Jenis Kelamin tidak boleh kosong"}),
    no_nik: z.string().min(1, {message: "No NIK tidak boleh kosong"}),
    no_bpjs: z.string().optional(),
    gol_darah: z.string().optional(),
    no_telepon: z.string().optional(),
    password: z.string().min(8, {message: "Password harus memilik minimal 8 karakter"}).max(20, {message: "Password tidak boleh memiliki lebih dari 20 karakter"}).regex(/.*[A-Z].*/,{message: "Password paling tidak memiliki 1 huruf kapital"}).regex(/.*\d.*/, {message: "Password paling tidak memiliki 1 angka"}),
    passwordConfirmation: z.string().min(1, {message: "Konfirmasi Password tidak boleh kosong"})
}).refine((data) => data.password === data.passwordConfirmation,{
    message: "Password and Konfirmasi Password tidak sama",
    path: ["passwordConfirmation"]
  })

export const loginSchema = z.object({
    email: z.string().min(1, {message: "Email tidak boleh kosong"}).email(),
    password: z.string().min(1, {message: "Password tidak boleh kosong"})
})

export type RegisterSchema = z.infer<typeof registerSchema>
export type LoginSchema = z.infer<typeof loginSchema>
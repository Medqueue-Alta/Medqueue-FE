import * as z from "zod"

export const schedulesSchema = z.object({
    poli: z.string().min(1, {message: "Poli klinik tidak boleh kosong"}),
    hari: z.string().min(1, {message: "Hari tidak boleh kosong"}),
    jam_mulai: z.string().min(1, {message: "Jam Mulai tidak boleh kosong"}),
    jam_selesai: z.string().min(1, {message: "Jam Selesai tidak boleh kosong"}),
    kuota: z.number().min(1, {message: "Kuota tidak boleh kurang dari 1"})
})


export type SchedulesSchema = z.infer<typeof schedulesSchema>
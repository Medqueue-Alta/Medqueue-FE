import * as z from "zod";

export const reservationSchema = z
  .object({
    full_name: z.string().min(1, { message: "Full name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(6, { message: "Password is required" }),
    repassword: z.string().min(6, { message: "Password is required" }),
    role: z.string().default("user"),
    address: z.string().min(1, { message: "Address is required" }),
    phone_number: z
      .string()
      .min(8, { message: "Phone number minimum length is 8" }),
  })
  

export type ReservationSchema = z.infer<typeof reservationSchema>;

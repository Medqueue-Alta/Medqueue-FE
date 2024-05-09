import AuthLayout from "@/components/authLayout";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/ui/MainButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "@/utils/api/auth/type";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { userRegister } from "@/utils/api/auth/api";
import { useNavigate } from "react-router-dom";
import {
  CustomFormDatePicker,
  CustomFormField,
  CustomFormSelect,
} from "@/components/Faskes/CustomFormField";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      email: "",
      gender: "",
      gol_darah: "",
      no_bpjs: "",
      no_nik: "",
      no_telepon: "",
      tempat_lahir: "",
      tgl_lahir: new Date(),
      password: "",
      passwordConfirmation: "",
    },
  });
  const gender = [
    {
      label: "Laki - Laki",
      value: "L",
    },
    {
      label: "Perempuan",
      value: "P",
    },
  ];
  const gol_darah = [
    {
      label: "A",
      value: "A",
    },
    {
      label: "B",
      value: "B",
    },
    {
      label: "O",
      value: "O",
    },
    {
      label: "AB",
      value: "AB",
    },
  ];
  const register = async (body: RegisterSchema) => {
    try {
      const response = await userRegister(body);
      toast({
        title: "Success",
        description: response.message,
      });
      navigate("/login");
    } catch (error) {
      // console.log((error as Error).message)
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  return (
    <AuthLayout>
      <h1 className="text-2xl mt-2">Register</h1>
      <div className="w-full p-10">
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(register)}>
            <div className="mb-2">
              <CustomFormField
                control={form.control}
                label="Nama Lengkap"
                name="nama"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Nama Lengkap"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
            </div>
            <div className="mb-2">
              <CustomFormField
                control={form.control}
                label="Email"
                name="email"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Email"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                    type="email"
                  />
                )}
              </CustomFormField>
            </div>
            <div className="mb-2 flex justify-between items-center gap-3">
              <div className="w-1/2">
                <CustomFormField
                  control={form.control}
                  label="Tempat Lahir"
                  name="tempat_lahir"
                >
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="Tempat Lahir"
                      aria-disabled={form.formState.isSubmitting}
                      disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
              </div>
              <div className="w-1/2">
                <CustomFormDatePicker
                  label="Tanggal Lahir"
                  placeholder="Tanggal Lahir"
                  control={form.control}
                  name="tgl_lahir"
                />
              </div>
            </div>
            <div className="mb-2 flex items-center w-full gap-3">
              <div className="w-1/2">
                <CustomFormSelect
                  label="Jenis Kelamin"
                  placeholder="Jenis Kelamin"
                  control={form.control}
                  name="gender"
                  disabled={form.formState.isSubmitting}
                  options={gender}
                />
              </div>
              <div className="w-1/2">
                <CustomFormSelect
                  label="Golongan Darah"
                  placeholder="Golongan Darah"
                  control={form.control}
                  name="gol_darah"
                  disabled={form.formState.isSubmitting}
                  options={gol_darah}
                />
              </div>
            </div>
            <div className="mb-2">
              <CustomFormField control={form.control} label="NIK" name="no_nik">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="NIK"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
            </div>
            <div className="mb-2">
              <CustomFormField
                control={form.control}
                label="No BPJS"
                name="no_bpjs"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="No BPJS"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
            </div>
            <div>
              <CustomFormField
                control={form.control}
                label="No Telpon"
                name="no_telepon"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="No Telpon"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                    type="tel"
                  />
                )}
              </CustomFormField>
            </div>
            <div className="mb-2">
              <CustomFormField
                control={form.control}
                label="Password"
                name="password"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Password"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                    type="password"
                  />
                )}
              </CustomFormField>
            </div>
            <div className="mb-2">
              <CustomFormField
                control={form.control}
                label="Konfirmasi Password"
                name="passwordConfirmation"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Konfirmasi Password"
                    aria-disabled={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    value={field.value as string}
                    type="password"
                  />
                )}
              </CustomFormField>
            </div>
            <div className="text-center">
              <MainButton text="Register" type="submit" className="mt-3" />
            </div>
          </form>
        </Form>
        <p className="text-center mt-3 text-sm">
          Sudah Punya Akun?{" "}
          <Link to={"/login"} className="hover:text-[#1c5e5b] duration-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;

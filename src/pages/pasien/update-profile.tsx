import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

import PatientLayout from "@/components/Pasien/PatientLayout";
import UpdateProfileCard from "@/components/Pasien/PatientUpdateProfileCard";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/Pasien/PatientCustomFormField";
import { CustomFormDatePicker } from "@/components/Faskes/CustomFormField";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { getPatient, updateProfile } from "@/utils/api/patient/api";
import {
  updateProfileSchema,
  UpdateProfileSchema,
} from "@/utils/api/patient/form-type";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";

const UpdateProfile = () => {
  const [patient, setPatient] = useState("");
  const navigate = useNavigate();

  const form = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
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
      label: "Laki-Laki",
      value: "L",
    },
    {
      label: "Perempuan",
      value: "P",
    },
  ];

  const genderOptions = gender.map((option) => ({
    label: option.label,
    value: option.value,
  }));

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
      label: "AB",
      value: "AB",
    },
    {
      label: "O",
      value: "O",
    },
  ];

  const goldarOptions = gol_darah.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAxiosConfig(localStorage.getItem("token")!);
        const response = await getPatient();
        setPatient(response.data.nama);
        console.log(patient);
      } catch (error) {
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    };

    fetchData();
  }, []);

  async function onSubmit(data: UpdateProfileSchema) {
    try {
      const result = await updateProfile(data);
      navigate("/pasien/home");
      toast({
        title: "Success",
        description: result.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <div className="w-full my-5">
          <UpdateProfileCard nama={patient}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <CustomFormField
                  control={form.control}
                  label="Nama Lengkap"
                  name="nama"
                  id="form-nama"
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
                <CustomFormField
                  control={form.control}
                  label="Email"
                  name="email"
                  id="form-email"
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
                <CustomFormField
                  control={form.control}
                  label="Tempat Lahir"
                  name="tempat_lahir"
                  id="form-tempat-lahir"
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
                <CustomFormDatePicker
                  label="Tanggal Lahir"
                  placeholder="Tanggal Lahir"
                  control={form.control}
                  name="tgl_lahir"
                />
                <CustomFormSelect
                  label="Jenis Kelamin"
                  placeholder="Jenis Kelamin"
                  control={form.control}
                  name="gender"
                  disabled={form.formState.isSubmitting}
                  options={genderOptions}
                  id="form-gender"
                />
                <CustomFormSelect
                  label="Golongan Darah"
                  placeholder="Golongan Darah"
                  control={form.control}
                  name="gol_darah"
                  disabled={form.formState.isSubmitting}
                  options={goldarOptions}
                  id="form-goldar"
                />
                <CustomFormField
                  control={form.control}
                  label="NIK"
                  name="no_nik"
                  id="form-nik"
                >
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
                <CustomFormField
                  control={form.control}
                  label="No BPJS"
                  name="no_bpjs"
                  id="form-bpjs"
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
                <CustomFormField
                  control={form.control}
                  label="No Telpon"
                  name="no_telepon"
                  id="form-tel"
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
                <CustomFormField
                  control={form.control}
                  label="Password"
                  name="password"
                  id="form-password"
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
                <CustomFormField
                  control={form.control}
                  label="Konfirmasi Password"
                  name="passwordConfirmation"
                  id="form-repassword"
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
                <div className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="w-max h-max self-center bg-[#089993]"
                    id="update-btn"
                  >
                    Update
                  </Button>
                </div>
              </form>
            </Form>
          </UpdateProfileCard>
        </div>
      </div>
    </PatientLayout>
  );
};

export default UpdateProfile;

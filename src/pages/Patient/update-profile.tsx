import PatientLayout from "@/components/PatientLayout";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import UpdateProfileCard from "@/components/UpdateProfileCard";

const UpdateProfile = () => {
  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <UpdateProfileCard>
          <div className="flex flex-col gap-2">
            <Label>Poli Klinik</Label>
            <Input type="text" placeholder="Poli Klinik" />
            <Label>Tanggal Daftar</Label>
            <Input type="text" placeholder="Tanggal Daftar" />
            <Label>Jadwal</Label>
            <Input type="text" placeholder="Jadwal" />
            <Label>Keluhan</Label>
            <Input type="text" placeholder="Jadwal" />
            <Label>Poli Klinik</Label>
            <Input type="text" placeholder="Poli Klinik" />
            <Label>Tanggal Daftar</Label>
            <Input type="text" placeholder="Tanggal Daftar" />
            <Label>Jadwal</Label>
            <Input type="text" placeholder="Jadwal" />
            <Label>Keluhan</Label>
            <Input type="text" placeholder="Jadwal" />
            <Button type="submit" className="w-max self-center bg-[#089993]">
              Submit
            </Button>
          </div>
        </UpdateProfileCard>
      </div>
    </PatientLayout>
  );
};

export default UpdateProfile;

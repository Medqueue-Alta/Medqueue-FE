import PatientLayout from "@/components/PatientLayout";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import UpdateProfileCard from "@/components/PatientUpdateProfileCard";

const UpdateProfile = () => {
  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <UpdateProfileCard nama="John Doe">
          <div className="flex flex-col gap-2">
            <Label>Nama Lengkap</Label>
            <Input type="text" placeholder="Nama Lengkap" />
            <Label>Email</Label>
            <Input type="text" placeholder="Email" />
            <Label>Tempat Lahir</Label>
            <Input type="text" placeholder="Tempat Lahir" />
            <Label>Tanggal Lahir</Label>
            <Input type="text" placeholder="Tanggal Lahir" />
            <Label>NIK</Label>
            <Input type="text" placeholder="NIK" />
            <Label>No BPJS</Label>
            <Input type="text" placeholder="No BPJS" />
            <Label>Golongan Darah</Label>
            <Input type="text" placeholder="Golongan Darah" />
            <Label>No Telpon</Label>
            <Input type="text" placeholder="No Telpon" />
            <Button type="submit" className="w-max h-max self-center bg-[#089993]">
              Update
            </Button>
          </div>
        </UpdateProfileCard>
      </div>
    </PatientLayout>
  );
};

export default UpdateProfile;

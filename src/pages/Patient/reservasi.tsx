
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";
import PatientReservationCard from "@/components/ReservationCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PatientReservation = () => {

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
        <PatientInformationCard
          nama="John Doe"
          NIK="123456789"
          BJPS="1234556"
        />
        <PatientReservationCard>
          <div className="flex flex-col gap-2">
            <Label>Poli Klinik</Label>
            <Input type="text" placeholder="Poli Klinik" />
            <Label>Tanggal Daftar</Label>
            <Input type="text" placeholder="Tanggal Daftar" />
            <Label>Jadwal</Label>
            <Input type="text" placeholder="Jadwal" />
            <Label>Keluhan</Label>
            <Textarea placeholder="Keluhan" className="resize-none" />
            <div className="flex flex-row gap-2">
              <Checkbox id="terms2" disabled />
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Centang Jika Menggunakan BPJS
              </label>
            </div>
            <Button type="submit" className="w-max self-center bg-[#089993]">
              Submit
            </Button>
          </div>
        </PatientReservationCard>
      </div>
    </PatientLayout>
  );
};

export default PatientReservation;

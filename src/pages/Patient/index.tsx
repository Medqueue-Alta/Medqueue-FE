import PatientCard from "@/components/ReservedScheduleCard";
import QueueCard from "@/components/QueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

const PatientHome = () => {
  return (
    <PatientLayout>
      <div className="grid grid-rows-3 justify-center justify-items-center h-full">
        <PatientInformationCard
          nama="John Doe"
          NIK="123456789"
          BJPS="1234556"
        />
        <PatientCard
          title="Poli Umum"
          jadwal="12:00"
          tanggal="12-04-2024"
          dokter="dr. John Doe"
        />
        <div className="">
          <div className="flex flex-row gap-1">
            <QueueCard antrian="12" />
            <QueueCard antrian="15" />
          </div>
          <p className="text-xs">*Antrian yang terlewat akan dimasukkan ke dalam waiting list</p>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientHome;

import PatientCard from "@/components/PatientReservedScheduleCard";
import QueueCard from "@/components/PatientQueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

const PatientHome = () => {
  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center h-full">
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
        <div className="self-start">
          <div className="grid grid-flow-col gap-1">
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

import { useEffect, useState } from "react";

import PatientCard from "@/components/PatientReservedScheduleCard";
import QueueCard from "@/components/PatientQueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

import { getPatient } from "@/utils/api/patient/api";
import { IPatient } from "@/utils/api/patient/type";

const PatientHome = () => {
  const [user, setUser] = useState<IPatient>();

 useEffect(() => {
   async function fetchData () {
     try {
       const response = await getPatient();
       setUser(response.data);
       
     } catch (error) {
       console.log((error as Error).message.toString());
     }
   }

   fetchData();
 }, []);

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center gap-2">
        <div className="w-full my-8">
          <PatientInformationCard nama={user?.nama} NIK={user?.no_nik} BJPS={user?.no_bpjs} />
        </div>
        <div className="w-full my-5">
          <PatientCard
            title="Poli Umum"
            jadwal="12:00"
            tanggal="12-04-2024"
            dokter="dr. John Doe"
          />
        </div>
        <div className="w-full my-24 self-start">
          <div className="grid grid-flow-col gap-1">
            <QueueCard antrian="12" />
            <QueueCard antrian="15" />
          </div>
          <p className="text-xs">
            *Antrian yang terlewat akan dimasukkan ke dalam waiting list
          </p>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientHome;

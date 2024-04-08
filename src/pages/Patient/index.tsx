import { useEffect, useState } from "react";

import PatientCard from "@/components/PatientReservedScheduleCard";
import QueueCard from "@/components/PatientQueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

import { getPatient } from "@/utils/api/patient/api";

const PatientHome = () => {
  const [patient, setPatient] = useState("");
  const [nik, setNIK] = useState("");
  const [bpjs, setBPJS] = useState("");

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await getPatient();
       setPatient(response.data.nama);
       setNIK(response.data.no_nik);
       setBPJS(response.data.no_bpjs);
     } catch (error) {
       console.log((error as Error).message.toString());
     }
   };

   fetchData();
 }, []);

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center">
        <div className="w-full my-5">
          <PatientInformationCard nama={patient} NIK={nik} BJPS={bpjs} />
        </div>
        <div className="w-full my-5">
          <PatientCard
            title="Poli Umum"
            jadwal="12:00"
            tanggal="12-04-2024"
            dokter="dr. John Doe"
          />
        </div>
        <div className="w-full my-5 self-start">
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

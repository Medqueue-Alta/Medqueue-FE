import { useEffect, useState } from "react";

import PatientCard from "@/components/PatientReservedScheduleCard";
import QueueCard from "@/components/PatientQueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

import {
  getPatient,
  getPatientReservation,
  getReservations,
} from "@/utils/api/patient/api";
import {
  IPatient,
  IReservation,
  PatientReservation,
} from "@/utils/api/patient/type";
import { IResponse } from "@/utils/types/api";

const PatientHome = () => {
  const [user, setUser] = useState<IPatient>();
  const [data, setData] = useState<IResponse<IReservation>>();
  const [reservation, setReservation] =
    useState<IResponse<PatientReservation>>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPatient();
        setUser(response.data);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await getReservations();
        setData(response);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    }

    fetchReservations();
  }, []);

  useEffect(() => {
    async function fetchPatientReservation() {
      try {
        const response = await getPatientReservation(
          data?.data.reservations_id
        );
        setReservation(response);
      } catch (error) {
        console.log((error as Error).message.toString());
      }
    }

    fetchPatientReservation();
  }, []);

  return (
    <PatientLayout>
      <div className="grid justify-center justify-items-center items-center gap-2">
        <div className="w-full my-8">
          <PatientInformationCard
            nama={user?.nama}
            NIK={user?.no_nik}
            BJPS={user?.no_bpjs}
          />
        </div>
        <div className="w-full my-5">
          <PatientCard
            title={data?.data.poli}
            jadwal={reservation?.data.jam_mulai}
            tanggal={reservation?.data.tanggal}
          />
        </div>
        <div className="w-full my-24 self-start">
          <div className="grid grid-flow-col gap-1">
            <QueueCard
              title="Antrian Anda"
              antrian={reservation?.data.nomor_antrian}
            />
            <QueueCard
              title="Antrian Sekarang"
              antrian={reservation?.data.antrian_sekarang}
            />
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

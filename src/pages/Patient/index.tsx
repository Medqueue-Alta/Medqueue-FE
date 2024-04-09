import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

import PatientCard from "@/components/PatientReservedScheduleCard";
import QueueCard from "@/components/PatientQueueCard";
import PatientInformationCard from "@/components/PatientInformationCard";
import PatientLayout from "@/components/PatientLayout";

import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const PatientHome = () => {
  const [user, setUser] = useState<IPatient>();
  const [data, setData] = useState<IResponse<IReservation>>();
  const [reservation, setReservation] =
    useState<IResponse<PatientReservation>>();

  useEffect(() => {
    async function fetchData() {
      try {
        setAxiosConfig(localStorage.getItem("token")!);
        const response = await getPatient();
        setUser(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
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
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
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
      <div className="grid grid-rows-2 justify-center justify-items-center items-center gap-2 h-full">
        <div className="w-full my-8">
          <PatientInformationCard
            nama={user?.nama}
            NIK={user?.no_nik}
            BJPS={user?.no_bpjs}
          />
        </div>
        {reservation?.data ? ( // Check if reservation data is available
          <>
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
          </>
        ) : (
          <div className="w-full my-24 py-20 self-start text-2xl ">
            <Button
              type="submit"
              className="w-max self-center text-xl bg-[#089993]"
              asChild
            >
              <Link to={"/pasien/reservasi"}>Silakan buat reservasi</Link>
            </Button>
          </div>
        )}
      </div>
    </PatientLayout>
  );
};

export default PatientHome;

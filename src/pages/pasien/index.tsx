import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

import PatientCard from "@/components/Pasien/PatientReservedScheduleCard";
import QueueCard from "@/components/Pasien/PatientQueueCard";
import PatientInformationCard from "@/components/Pasien/PatientInformationCard";
import PatientLayout from "@/components/Pasien/PatientLayout";

import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import {
  getPatient,
  getPatientReservation,
  getSchedule,
} from "@/utils/api/patient/api";
import { IPatient, IReservation, ScheduleData } from "@/utils/api/patient/type";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PatientHome = () => {
  const [user, setUser] = useState<IPatient>();
  const [reservation, setReservation] = useState<IReservation[]>([]);
  const [newNewData, setNewNewData] = useState<IReservation>();
  const [Jadwal, setJadwal] = useState(0);
  const [information, setInformation] = useState<ScheduleData>();

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
        const response = await getPatientReservation();
        setReservation(response.data);
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
    if (reservation.length !== 0) {
      setNewNewData(reservation[0]);
      console.log(newNewData);
    }
  }, [reservation, newNewData]);

  useEffect(() => {
    const idJadwal = newNewData?.id_jadwal;
    if (idJadwal !== undefined) {
      setJadwal(idJadwal);
    }
  }, [newNewData]);

  useEffect(() => {
    async function fetchPatientSchedule() {
      try {
        if (Jadwal) {
          console.log(Jadwal);
          const response = await getSchedule(Jadwal);
          setInformation(response.data);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    }

    fetchPatientSchedule();
  }, [newNewData, Jadwal]);

  function poliIDConversion(kodePoli?: number) {
    const namaPoli: { [key: number]: string } = {
      1: "Poli Umum",
      2: "Poli Gigi & Mulut",
      3: "Poli KIA",
      4: "UGD",
    };

    const poliName = namaPoli[kodePoli || 0];
    return poliName || "Tidak Diketahui";
  }

  function capitalizeFirstLetter(nama?: string) {
    if (nama !== undefined) {
      const capitalizedNama = nama.charAt(0).toUpperCase() + nama.slice(1);
      return capitalizedNama;
    }

    return "John Doe";
  }

  return (
    <PatientLayout>
      <div className="grid grid-rows-2 justify-center justify-items-center items-center gap-2 h-full">
        <div className="w-full my-8">
          <PatientInformationCard
            nama={capitalizeFirstLetter(user?.nama)}
            NIK={user?.no_nik}
            BJPS={user?.no_bpjs}
          />
        </div>
        {information ? ( // Check if reservation data is available
          <>
            <div className="w-full my-5">
              <PatientCard
                title={poliIDConversion(newNewData?.poli_id)}
                jadwal={information?.jam_mulai}
                tanggal={information?.hari}
              />
            </div>
            <div className="w-full my-16 py-2 self-start">
              <div className="grid grid-flow-col gap-1 ">
                <QueueCard
                  title="Antrian Anda"
                  antrian={newNewData?.antrian_anda}
                />
                <QueueCard
                  title="Antrian Sekarang"
                  antrian={newNewData?.antrian_sekarang}
                />
              </div>
              <p className="text-xs">
                *Antrian yang terlewat akan dimasukkan ke dalam waiting list
              </p>
            </div>
          </>
        ) : (
          <div className="w-full my-28 py-14 self-start text-2xl ">
            <Button
              type="submit"
              className="w-full h-full self-center text-xl bg-[#089993]"
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

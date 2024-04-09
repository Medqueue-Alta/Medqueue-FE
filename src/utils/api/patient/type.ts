export interface IPatient {
  nama: string;
  no_nik: string;
  no_bpjs: string;
}

export interface ScheduleData {
  schedule_id: number;
  poli: string;
  hari: string;
  jam_mulai: string;
  kuota: number;
  terisi: number;
}

export interface IReservation {
  reservations_id: number;
  nama: string;
  poli: string;
}

export interface PatientReservation {
  nomor_antrian: number;
  antrian_sekarang: number;
  tanggal: string;
  jam_mulai: string;
  jam_selesai: string;
}
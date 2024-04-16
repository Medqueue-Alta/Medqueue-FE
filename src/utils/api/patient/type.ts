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
  user_id: number;
  id_jadwal: number;
  nama: string;
  poli_id: number;
  tanggal_kunjungan: string;
  antrian_anda: number;
  antrian_sekarang: number;
}

export interface PatientReservation {
  nomor_antrian: number;
  antrian_sekarang: number;
  tanggal: string;
  jam_mulai: string;
  jam_selesai: string;
}
export interface IPatient {
  nama: string;
  no_nik: string;
  no_bpjs: string;
}

export interface ISchedule<ScheduleData> {
  code: string;
  message: string;
  data: ScheduleData;
}

export interface ScheduleData {
  schedule_id: number;
  poli: string;
  hari: string;
  jam_praktek: string;
  kuota: number;
  terisi: number;
}

import { checkProperty, valueFormatData } from "@/utils/formatter";
import { IResponse } from "@/utils/types/api";
import { IPatient, ISchedule, ReservationSchema, ScheduleData } from "@/utils/api/patient/type";
import axios from "axios";

export const getPatient = async () => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/MNFAWWAZ99/MedQueue/1.0.0/profile"
    );

    return response.data as IResponse<IPatient>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getSchedule = async () => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/MNFAWWAZ99/MedQueue/1.0.0/schedules"
    );

    return response.data as ISchedule<ScheduleData[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addNewReservation = async (body: ReservationSchema) => {
  try {
    const formData = new FormData();

    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }

    const response = await axios.post(
      "https://virtserver.swaggerhub.com/MNFAWWAZ99/MedQueue/1.0.0/reservations",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

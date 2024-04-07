import { checkProperty, valueFormatData } from "@/utils/formatter";
import { IResponse } from "@/utils/types/api";
import {
  IPatient,
  ISchedule,
  ReservationSchema,
  ScheduleData,
  UpdateProfileSchema,
} from "@/utils/api/patient/type";
import axiosWithConfig from "../axiosWithConfig";

export const getPatient = async () => {
  try {
    const response = await axiosWithConfig.get("/users");

    return response.data as IResponse<IPatient>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getSchedule = async () => {
  try {
    const response = await axiosWithConfig.get("/schedules");

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

    const response = await axiosWithConfig.post("/reservations", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateProfile = async (body: UpdateProfileSchema) => {
  try {
    const formData = new FormData();

    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }
    const response = await axiosWithConfig.put("/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

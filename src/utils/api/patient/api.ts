import axios from "axios";

import { checkProperty, valueFormatData } from "@/utils/formatter";
import { IResponse } from "@/utils/types/api";
import { ReservationSchema } from "./reservation-type";
// import axiosWithConfig from "../axiosWithConfig";
import { IPatient } from "./type";
import axiosWithConfig from "../axiosWithConfig";

export const getPatient = async () => {
  try {
    const response = await axiosWithConfig("/users")

    return response.data as IPatient;
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

    const response = await axios.post("/books", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

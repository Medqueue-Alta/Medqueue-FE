import { checkProperty, valueFormatData } from "@/utils/formatter";
import { IResponse } from "@/utils/types/api";
import { ReservationSchema } from "./reservation-type";
// import axiosWithConfig from "../axiosWithConfig";
import { IPatient } from "./type";

export const getPatient = async () => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/MNFAWWAZ99/MedQueue/1.0.0/profile"
    );

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

    const response = await axiosWithConfig.post("/reservation", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

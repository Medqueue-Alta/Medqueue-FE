import axios from "axios";

import { checkProperty, valueFormatData } from "@/utils/formatter";
import { IResponse } from "@/utils/types/api";
import { ReservationSchema } from "./reservation-type";

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
      "http://petstore.swagger.io/v2/reservasi",
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

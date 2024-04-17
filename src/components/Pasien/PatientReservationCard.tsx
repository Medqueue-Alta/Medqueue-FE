import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  children: ReactNode;
}

const PatientReservationCard = (props: Props) => {
  const { children } = props;

  return (
    <Card className="w-80 bg-[#92DBD8] rounded-2xl shadow-md">
      <CardHeader className="items-center p-4">
        <CardTitle className="uppercase text-justify">Atur Jadwal</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-[#BEE8E6] rounded-2xl ">
        {children}
      </CardContent>
    </Card>
  );
};

export default PatientReservationCard;

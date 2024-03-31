import  { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  children: ReactNode;
}

const PatientReservationCard = (props: Props) => {
const { children } = props;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-4/12 bg-[#92DBD8] rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="uppercase">Atur Jadwal</CardTitle>
        </CardHeader>
        <CardContent className="bg-[#BEE8E6] rounded-2xl ">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

export default PatientReservationCard
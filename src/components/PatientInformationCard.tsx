import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  nama: string;
  NIK: string;
  BJPS: string;
}

const PatientInformationCard = (props: Props) => {
  const { nama, NIK, BJPS } = props;

  return (
    <Card>
      <CardHeader className="flex flex-row justify-center p-4 bg-[#92DBD8]">
        <CardTitle>{nama}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-[#BEE8E6]">
        <div className="grid grid-cols-3">
          <p>NIK</p>
          <p className="col-span-2">: {NIK}</p>
        </div>
        <div className="grid grid-cols-3">
          <p>BPJS</p>
          <p className="col-span-2">: {BJPS}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInformationCard;

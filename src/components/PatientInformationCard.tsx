import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  nama: string;
  NIK: string;
  BJPS: string;
}

const PatientInformationCard = (props: Props) => {
  const { nama, NIK, BJPS } = props;

  return (
    <Card className=" w-max h-max self-center">
      <CardHeader className="flex flex-row justify-center bg-[#92DBD8]">
        <CardTitle>{nama}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-[#BEE8E6]">
        <div className="grid grid-cols-3">
          <p>NIK</p>
          <p>:</p>
          <p className="">{NIK}</p>
        </div>
        <div className="grid grid-cols-3">
          <p>BPJS</p> 
          <p>:</p>
          <p>{BJPS}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInformationCard;

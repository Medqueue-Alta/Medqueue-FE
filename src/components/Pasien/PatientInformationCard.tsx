import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  nama?: string;
  NIK?: string;
  BJPS?: string;
}

const PatientInformationCard = (props: Props) => {
  const { nama, NIK, BJPS } = props;

  return (
    <Card className=" rounded-lg bg-[#92DBD8] shadow-lg">
      <CardHeader className="flex flex-row justify-center  p-4 ">
        <CardTitle>{nama}</CardTitle>
      </CardHeader>
      <CardContent className="rounded-lg  p-4 bg-[#BEE8E6]">
        <div className="grid grid-cols-4">
          <p>NIK</p>
          <p>:</p>
          <p className=" col-span-2 justify-self-center">{NIK}</p>
        </div>
        <div className="grid grid-cols-4">
          <p>BPJS</p>
          <p>:</p>
          <p className=" col-span-2 justify-self-center">{BJPS}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInformationCard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title?: string;
  tanggal?: string;
  jadwal?: string;
}

const PatientCard = (props: Props) => {
  const { title, tanggal, jadwal } = props;

  return (
    <Card className="self-start w-full h-full rounded-lg bg-[#92DBD8] shadow-lg">
      <CardHeader className="flex flex-row justify-center p-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-[#BEE8E6] rounded-lg">
        <div className="grid grid-cols-4">
          <p>Tanggal</p>
          <p>:</p>
          <p className=" col-span-2 justify-self-center">{tanggal}</p>
        </div>
        <div className="grid grid-cols-4">
          <p>Jadwal</p>
          <p>:</p>
          <p className=" col-span-2 justify-self-center">{jadwal}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;

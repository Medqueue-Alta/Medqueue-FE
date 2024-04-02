import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  tanggal: string;
  jadwal: string;
  dokter: string;
}

const PatientCard = (props: Props) => {
  const { title, tanggal, jadwal, dokter } = props;

  return (
    <Card className="self-start w-max h-max ">
      <CardHeader className="flex flex-row justify-center p-4 bg-[#92DBD8]">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-[#BEE8E6]">
        <div className="grid grid-cols-3">
          <p>Tanggal</p>
          <p>:</p>
          <p className="">{tanggal}</p>
        </div>
        <div className="grid grid-cols-3">
          <p>Jadwal</p> 
          <p>:</p>
          <p>{jadwal}</p>
        </div>
        <div className="grid grid-cols-3">
          <p>Dokter</p> 
          <p>:</p>
          <p>{dokter}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;

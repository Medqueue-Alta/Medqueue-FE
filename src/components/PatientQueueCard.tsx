import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  antrian: string;
}

const QueueCard = (props: Props) => {
  const { antrian } = props;

  return (
    <Card className="self-start w-max h-max">
      <CardHeader className="flex flex-row justify-center p-4 bg-[#92DBD8]">
        <CardTitle>Antrian Anda</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center bg-[#BEE8E6]">
        <p className="text-8xl">{antrian}</p>
      </CardContent>
    </Card>
  );
};

export default QueueCard;

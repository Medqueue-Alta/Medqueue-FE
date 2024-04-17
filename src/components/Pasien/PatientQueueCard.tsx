import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  antrian?: number;
}

const QueueCard = (props: Props) => {
  const { title, antrian } = props;

  return (
    <Card className="self-start w-full h-full rounded-lg bg-[#92DBD8]">
      <CardHeader className="flex flex-row justify-center p-4 ">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center bg-[#BEE8E6] rounded-lg">
        <p className="text-8xl">{antrian}</p>
      </CardContent>
    </Card>
  );
};

export default QueueCard;

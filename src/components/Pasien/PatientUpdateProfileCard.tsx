import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  children: ReactNode;
  nama: string;
}

const UpdateProfileCard = (props: Props) => {
  const { children, nama } = props;

  return (
    <Card className="w-80 bg-[#92DBD8] rounded-2xl shadow-md">
      <CardHeader className="items-center">
        <CardTitle className="uppercase text-justify">{nama}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-[#BEE8E6] rounded-2xl ">
        {children}
      </CardContent>
    </Card>
  );
};

export default UpdateProfileCard;

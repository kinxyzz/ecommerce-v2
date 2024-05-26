import { IdashbordCount } from "@/@types/interface";
import { icons } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function DashboardCount({
  title,
  iconName,
  dataNum,
  percent,
}: IdashbordCount) {
  const LucideIcon = icons[iconName];
  return (
    <Card className="grow">
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <h2>{title}</h2>
          <LucideIcon size={16} />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
          {dataNum}
        </h3>
        <p className="text-sm text-gray-400">{percent}</p>
      </CardContent>
    </Card>
  );
}

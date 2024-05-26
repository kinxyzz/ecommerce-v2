import { icons } from "lucide-react";

export interface IsidebarPiece {
  icon: keyof typeof icons;
  name: string;
  path: string;
}

export interface IdashbordCount {
  title: string;
  iconName: keyof typeof icons;
  dataNum: number | string;
  percent: string;
}

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

export interface IitemList<T, N> {
  product_id: T;
  name: N;
  description: N;
  image: N;
  price: T;
  quantity: T;
  category_id: T;
  category: {
    name: N;
  };
}

export interface ICartList<T, N> {
  cart_id: T;
  product_id: T;
  quantity: T;
  user_id: N;
  product: {
    name: N;
    description: N;
    price: T;
  };
}

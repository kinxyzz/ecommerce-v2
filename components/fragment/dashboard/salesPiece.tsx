import { CircleUser } from "lucide-react";

export default function SalesPiece() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <CircleUser size={40} />
        <div className="font-medium">
          <p>Your name</p>
          <p className="text-sm text-gray-400">YourEmail@email.com</p>
        </div>
      </div>
      <div>
        <p>$250.00</p>
      </div>
    </div>
  );
}

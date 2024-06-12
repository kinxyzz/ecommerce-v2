import LoginForm from "@/components/template/form/LoginForm";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-screen">
      <Image src="/sripadilogo.png" alt="logo" width={100} height={100} />
      <LoginForm />
    </div>
  );
}

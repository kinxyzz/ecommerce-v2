import LoginForm from "@/components/template/form/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const isAuthenticated = !!cookies().get("refreshToken")?.value;

  if (isAuthenticated) {
    redirect("/products");
  }

  return (
    <div className="flex items-center flex-col gap-4 h-screen mt-10">
      <LoginForm />
    </div>
  );
}

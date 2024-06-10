import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function TestLoginForm() {
  async function login(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await axios.post(
      "http://localhost:5500/api/user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    return res.data;
  }

  return (
    <Card>
      <CardHeader>Login</CardHeader>
      <CardContent>
        <form action={login}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
          <Label htmlFor="password">password</Label>
          <Input type="password" name="password" id="password" />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

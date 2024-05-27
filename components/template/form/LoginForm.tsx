"use client";

import { z } from "zod";

import { LoginUser } from "@/app/hook/useUser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTokenStore } from "@/store/authenticated/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

export const formLoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginForm() {
  const setToken = useTokenStore((state) => state.setToken);
  const { login } = LoginUser();
  const [errorStatus, setErrorStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formLoginSchema>) {
    setLoading(true);
    login(values, {
      onSuccess: (data) => {
        setToken(data.data);
        router.push("/");
      },
    });
    setLoading(false);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your details to Login</CardDescription>
        <p className="text-red-500">{errorStatus}</p>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="min-w-72">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Input Your Email"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button disabled={loading} type="submit">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>

      <CardFooter>
        Dont Have Account?{" "}
        <Link
          className="ml-2 font-semibold hover:text-blue-400"
          href={"/register"}
        >
          Sign Up
        </Link>
      </CardFooter>
    </Card>
  );
}

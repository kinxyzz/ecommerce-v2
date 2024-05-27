import { formLoginSchema } from "@/components/template/form/LoginForm";
import { formRegisterSchema } from "@/components/template/form/registerForm";
import { UserService } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";

function LoginUser() {
  const { mutate: login, ...rest } = useMutation({
    mutationKey: ["login"],
    mutationFn: (loginData: z.infer<typeof formLoginSchema>) =>
      UserService.Login(loginData),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, ...rest };
}

function RegisterUser() {
  const { mutate: register, ...rest } = useMutation({
    mutationKey: ["register"],
    mutationFn: (registerData: z.infer<typeof formRegisterSchema>) =>
      UserService.register(registerData),
    onSuccess: () => {
      alert("register success");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  return { register, ...rest };
}

function GetUser() {
  const { data, ...rest } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserService.getUser(),
  });

  return { data, ...rest };
}

export { GetUser, LoginUser, RegisterUser };

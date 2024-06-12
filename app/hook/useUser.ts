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

function LogoutUser() {
  const { mutate: logout, ...rest } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => UserService.Logout(),
  });

  return { logout, ...rest };
}

function GetUser() {
  const { data, ...rest } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserService.getUser(),
  });

  return { data, ...rest };
}

function GetCurrentUser() {
  const { data, ...rest } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UserService.getCurrent(),
    retry: false,
  });

  return { data, ...rest };
}

function GetUserToken() {
  const { data, ...rest } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UserService.userToken(),
    retry: false,
  });

  return { data, ...rest };
}

export {
  GetCurrentUser,
  GetUser,
  GetUserToken,
  LoginUser,
  LogoutUser,
  RegisterUser,
};

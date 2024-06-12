import { formLoginSchema } from "@/components/template/form/LoginForm";
import { formRegisterSchema } from "@/components/template/form/registerForm";
import { serverUrl } from "@/lib/static";
import axios from "axios";
import { z } from "zod";
import api from "./axiosInstance";

export class UserService {
  static async Login(loginData: z.infer<typeof formLoginSchema>) {
    const res = await axios.post(`${serverUrl}/api/user/login`, loginData, {
      withCredentials: true,
    });

    return res.data;
  }

  static async register(registerData: z.infer<typeof formRegisterSchema>) {
    const res = await axios.post(
      `${serverUrl}/api/user/register`,
      registerData
    );

    return res.data;
  }

  static async Logout() {
    const res = await api.patch("/user/logout", {});
    return res.data;
  }

  static async getCurrent() {
    const res = await api.get("/user/current");
    return res.data;
  }

  static async getUser() {
    try {
      const res = await api.get("/user");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async userToken() {
    const res = await api.get("/user/token");
    return res.data;
  }
}

import axios from "axios";
import api from "./axiosInstance";

export class UserService {
  static async Login({ email, password }: { email: string; password: string }) {
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
}

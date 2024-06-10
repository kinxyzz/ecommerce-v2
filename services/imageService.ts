import api from "./axiosInstance";

export default class imageService {
  static async uploadImage(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    const res = await api.post("/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  }
}

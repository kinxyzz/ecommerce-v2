import imageService from "@/services/imageService";
import { useMutation } from "@tanstack/react-query";

export function UseUploadImage() {
  const { mutate: uploadImage } = useMutation({
    mutationKey: ["upload-image"],
    mutationFn: (file: File) => imageService.uploadImage(file),
  });

  return { uploadImage };
}

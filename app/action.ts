"use server";

export const handleForm = async (FormData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const email = FormData.get("email");
  const password = FormData.get("password");
};

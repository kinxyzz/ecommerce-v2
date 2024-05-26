import { UserService } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";

function loginUser() {
  const { mutate: login, ...rest } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      UserService.Login({ email, password }),

    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { login, ...rest };
}

function getUser() {
  const { data, ...rest } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserService.getUser(),
  });

  return { data, ...rest };
}

export { getUser, loginUser };

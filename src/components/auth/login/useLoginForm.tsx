import { useLogin } from "@/services/auth/login/login.mutations";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setCookie } from "cookies-next";

interface LoginFormInputs {
  username: string;
  password: string;
  rememberMe: boolean;
}

export const useLoginForm = () => {
  const router = useRouter();
  const { mutate, isPending, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const { username, password } = data;

    mutate(
      { username, password },
      {
        onSuccess: (res) => {
          console.log("Login success:", res);

          setCookie("accessToken", res?.accessToken, {
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: true,
            path: "/",
          });

          // localStorage.setItem("AccessToken", res?.accessToken);

          router.push("/dashboard");
        },
      },
    );
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    setShowPassword,
    isPending,
    serverError: error,
  };
};

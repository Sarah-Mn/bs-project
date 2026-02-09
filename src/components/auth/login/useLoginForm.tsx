import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login data:", data);
    alert("Login successful (mock)");
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    showPassword,
    setShowPassword,
  };
};

import { Button, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "@/components/ui/input/Input";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    showPassword,
    setShowPassword,
    isPending,
    serverError,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-y-5">
        {/* Username */}
        <Input
          label="Username"
          placeholder="example: emilys"
          type="username"
          error={errors.username?.message}
          {...register("username", {
            required: "username is required",
          })}
        />

        {/* Password */}
        <Input
          label="Password"
          placeholder="example: emilyspass"
          type={showPassword ? "text" : "password"}
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          endAdornment={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          }
        />
      </div>

      {/* Server Error  */}
      {serverError && (
        <p className="text-red-500 bg-red-200 rounded-md py-1 px-4 text-sm">
          Login failed. Please try again.
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isPending}
        className="mt-2!"
      >
        {isPending ? <CircularProgress size={24} color="inherit" /> : "Login"}
      </Button>
    </form>
  );
};

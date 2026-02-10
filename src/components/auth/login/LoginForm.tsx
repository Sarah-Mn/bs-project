import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginForm } from "./useLoginForm";

const LoginForm = () => {
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
        <TextField
          label="Username"
          fullWidth
          type="username"
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username", {
            required: "username is required",
          })}
        />

        {/* Password */}
        <TextField
          label="Password"
          fullWidth
          type={showPassword ? "text" : "password"}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
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

export default LoginForm;

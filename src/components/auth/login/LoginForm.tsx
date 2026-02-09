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
    isSubmitting,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-y-5">
        {/* Email */}
        <TextField
          label="Email"
          fullWidth
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
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

      {/* Submit */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        className="!mt-2"
      >
        {isSubmitting ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;

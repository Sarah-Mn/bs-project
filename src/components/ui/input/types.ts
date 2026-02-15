export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  endAdornment?: React.ReactNode;
  containerClassName?: string;
}
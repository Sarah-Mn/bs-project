import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearch({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

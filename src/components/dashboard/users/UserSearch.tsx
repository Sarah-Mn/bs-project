import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function UserSearch({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      size="small"
    />
  );
}

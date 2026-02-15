import Input from "@/components/ui/input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function UserSearch({ value, onChange }: Props) {
  return (
    <Input
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

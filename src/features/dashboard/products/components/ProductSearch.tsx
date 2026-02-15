import Input from "@/components/ui/input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearch({ value, onChange }: Props) {
  return (
    <Input
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export interface SelectOption {
  id: string;
  label: string;
  group?: string;
}

export interface Props {
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
  placeholder?: string;
}
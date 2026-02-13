import Select from "@/components/ui/select/Select";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { useState } from "react";

export interface SelectOption {
  id: string;
  label: string;
  group?: string;
}

const options: SelectOption[] = Array.from({ length: 1000 }).map((_, i) => ({
  id: `${i}`,
  label: `Option ${i}`,
  group: i < 500 ? "Group A" : "Group B",
}));

const SelectPage = () => {
  const [selected, setSelected] = useState<SelectOption[]>([]);

  return (
    <DashboardLayout>
      <Select options={options} value={selected} onChange={setSelected} />
    </DashboardLayout>
  );
};

export default SelectPage;

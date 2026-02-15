import { useMemo } from "react";
import { SelectOption } from "./types";

export const useGroupedOptions = (options: SelectOption[]) => {
  return  useMemo(() => {
      const groups: Record<string, SelectOption[]> = {};
  
      options.forEach((opt) => {
        const group = opt.group || "Other";
        if (!groups[group]) groups[group] = [];
        groups[group].push(opt);
      });
  
      return Object.entries(groups);
    }, [options]);
}
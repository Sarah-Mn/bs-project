import { useMemo } from "react";
import { SelectOption } from "./types";

export const useFlattenedOptions = (groupedOptions: [string, SelectOption[]][]) => {
  return useMemo(() => {
        const rows: (SelectOption | { groupLabel: string })[] = [];
    
        groupedOptions.forEach(([group, items]) => {
          rows.push({ groupLabel: group });
          rows.push(...items);
        });
    
        return rows;
  }, [groupedOptions]);
}
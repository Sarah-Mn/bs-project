import { useMemo } from "react";
import { SelectOption } from "./types";


export const useFilteredOptions = (options: SelectOption[], query: string) => { 
  return useMemo(() => {
    if (!query) return options; 
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase()),
    );
  }, [options, query]);
};

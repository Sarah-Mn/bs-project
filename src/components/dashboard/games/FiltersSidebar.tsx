import { useRouter, useSearchParams } from "next/navigation";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", "1");

    router.push(`/dashboard/games?${params.toString()}`);
  };

  return (
    <div className="w-full md:w-64 space-y-4">
      <TextField
        fullWidth
        label="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          updateFilter("search", e.target.value);
        }}
      />

      <Select
        fullWidth
        defaultValue=""
        onChange={(e) => updateFilter("genres", e.target.value)}
      >
        <MenuItem value="">All Genres</MenuItem>
        <MenuItem value="action">Action</MenuItem>
        <MenuItem value="rpg">RPG</MenuItem>
      </Select>
    </div>
  );
}

import { useRouter, useSearchParams } from "next/navigation";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchParam = searchParams.get("search") || "";
  const genreParam = searchParams.get("genres") || "";

  const [search, setSearch] = useState(searchParam);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", "1");

    router.push(`/dashboard/games?${params.toString()}`);
  };

  return (
    <div className="w-full flex gap-x-4">
      <TextField
        fullWidth
        size="small"
        label="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          updateFilter("search", e.target.value);
        }}
      />

      <Select
        fullWidth
        size="small"
        value={genreParam}
        onChange={(e) => updateFilter("genres", e.target.value)}
      >
        <MenuItem value="">All Genres</MenuItem>
        <MenuItem value="action">Action</MenuItem>
        <MenuItem value="rpg">RPG</MenuItem>
      </Select>
    </div>
  );
}

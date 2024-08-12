"use client";

import { search } from "@/actions/search";
import { SearchIcon } from "@/core/icons";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term")?.replaceAll("%20", " ");
  return (
    <form action={search} className="flex justify-center items-center gap-2">
      <button type="submit">
        <SearchIcon width={20} height={20} />
      </button>
      <Input name="term" defaultValue={term} labelPlacement="outside-left" />
    </form>
  );
};

export default SearchInput;

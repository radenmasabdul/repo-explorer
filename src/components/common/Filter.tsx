import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterProps } from "@/types/components";

export default function Filter({
  searchInput,
  sort,
  order,
  onSearch,
  onSort,
  onOrder,
  searchPlaceholder = "Search...",
}: FilterProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder={searchPlaceholder}
          value={searchInput}
          onChange={(e) => onSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex items-center gap-2 sm:w-52">
        <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />

        <Select value={sort} onValueChange={(v) => v && onSort(v as "stars" | "forks" | "updated")}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="stars">Stars</SelectItem>
            <SelectItem value="forks">Forks</SelectItem>
            <SelectItem value="updated">Recently Updated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Select value={order} onValueChange={(v) => v && onOrder(v as "asc" | "desc")}>
        <SelectTrigger className="sm:w-32">
          <SelectValue placeholder="Order" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="desc">Descending</SelectItem>
          <SelectItem value="asc">Ascending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

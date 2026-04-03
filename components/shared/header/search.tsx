import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/product.actions";
import { SearchIcon } from "lucide-react";

const Search = async () => {
  const categories = await getAllCategories();

  return (
    <form action="/search" method="GET">
      <div className="flex w-full items-center space-x-2">
        <Select name="category">
          <SelectTrigger className="w-[40px] md:w-[180px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="all">
              All Categories
            </SelectItem>
            {categories.map((x) => (
              <SelectItem key={x.category} value={x.category}>
                {x.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name="q"
          type="text"
          placeholder="Search..."
          className="flex-1 min-w-0"
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default Search;

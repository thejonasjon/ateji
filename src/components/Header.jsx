import React, { useEffect, useState } from "react";
import { Search, Bell, ShoppingBag, Sparkles, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import SearchInput from "./ui/SearchInput";
import FilterCategory from "./ui/FilterCategory";
import FilterDialog from "./products/FilterDialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { useCart } from "@/hooks/use-cart";

export function Header() {
//   const { getTotalItems } = useCart();
const [isOpen, setIsOpen] = useState(false);
const [selectedFilters, setSelectedFilters] = useState([]);



// useEffect(() => {
//   setTempFilters(selectedFilters);
// }, [selectedFilters]);

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-100">
      <div className="px-4 pt-4 pb-3 space-y-6">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <span className="text-gray-800 text-2xl">♀</span>
              <span className="font-black text-gray-900 text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Ateji
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              variant="ghost"
              size="icon"
              className="relative rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="absolute -top-0.5 -right-0.5 rounded-full h-3 w-3 p-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[6px] flex items-center justify-center animate-pulse">
                3
              </div>
            </button>
            <Link to="/cart">
              <button
                variant="ghost"
                size="icon"
                className="relative rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              >
              </button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3">
          <div className="flex-1">
            <SearchInput />
          </div>
         <div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FilterCategory />
          </button>
          {isOpen && <motion.div layout>
            <FilterDialog
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedFilters={selectedFilters}
              onFiltersChange={setSelectedFilters}
            />
          </motion.div>}
         </div>
        </div>
      </div>
    </div>
  );
}
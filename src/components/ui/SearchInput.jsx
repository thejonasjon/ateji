import { Search } from "lucide-react";

export default function SearchInput() {
    return (
        <div className="relative">
          <Search className="absolute z-10 left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            placeholder="Search for style, category...."
            className="pl-14 bg-white/70 backdrop-blur-sm border-0 rounded-3xl w-full h-12 text-sm placeholder:text-gray-400 focus:bg-white focus:ring-8 focus:outline-1 outline-gray-200 focus:ring-gray-100 transition-all duration-300 shadow-lg"
          />
          {/* <button
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-2xl shadow-lg"
          >
            <Search className="h-4 w-4 text-white" />
          </button> */}
        </div>
    )
}
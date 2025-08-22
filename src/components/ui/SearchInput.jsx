import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { searchProducts } from "../../services/api";

export default function SearchInput({onResults}) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!search) {
        onResults({ results: [], notFound: false });
        return;
      }

      setLoading(true);
      try {
        const data = await searchProducts(search);

        if (data.length === 0) {
          onResults({ results: [], notFound: true });
        } else {
          onResults({ results: data, notFound: false });
        }
      } catch (error) {
        console.error("Search error:", error);
        onResults({ results: [], notFound: true });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, onResults]);

    return (
        <div className="relative">
          <Search className="absolute z-10 left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            placeholder="Search for style, category...."
            className="pl-14 bg-white/70 backdrop-blur-sm border-0 rounded-3xl w-full h-12 text-sm placeholder:text-gray-400 focus:bg-white focus:ring-8 focus:outline-1 outline-gray-200 focus:ring-gray-100 transition-all duration-300 shadow-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value.trim())}
          />
        {loading && (
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            Loading...
          </span>
        )}
        </div>
    )
}
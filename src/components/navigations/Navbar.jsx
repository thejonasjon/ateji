import { Home, ShoppingBag, Bookmark, Layers2, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Orders", icon: ShoppingBag, href: "/orders" },
  { name: "Bookmarks", icon: Bookmark, href: "/bookmarks" },
  { name: "Category", icon: Layers2, href: "/categories" },
//   { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 z-50">
      <div className="flex justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200"
            >
              <div
                className={`p-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span
                className={`text-xs mt-1 transition-all duration-200 ${
                  isActive ? "text-black font-medium" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
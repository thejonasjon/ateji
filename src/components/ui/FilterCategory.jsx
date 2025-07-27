import { Settings2 } from "lucide-react";

export default function FilterCategory() {
    return (
        <div className="relative">
            <div className="flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl p-3 cursor-pointer shadow-lg">
                <Settings2 className="w-5 h-5"/>
            </div>
        </div>
    )
}
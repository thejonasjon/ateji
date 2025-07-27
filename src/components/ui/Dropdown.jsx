import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({dropdown}){
    const [isOpen, setIsOpen] = useState(false);
    const [selectItem, setSelectItem] = useState(dropdown.title);
    const dropdownRef = useRef(null)

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false)
        }
      }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
          document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div className="space-y-2">
            <h5 className="text-sm font-bold">{dropdown[0].title}</h5>
            <div className="relative" ref={dropdownRef}>
                <div className="flex gap-2 mb-1">
                    <button className="w-full h-8 flex justify-between rounded-xl items-center border-1 border-gray-100 px-4"
                    onClick={(e) => {e.stopPropagation(), setIsOpen((prev) => !prev)}}
                    >
                        <span className="text-xs">{selectItem ? selectItem : `Select ${dropdown[0].title}`}</span>
                        <ChevronDown className="h-4 w-4 text-gray-800" />
                    </button>
                </div>

                {isOpen ?
                    <div className="absolute z-10 w-full flex flex-col items-start gap-2 bg-white border-1 border-gray-200 rounded-2xl px-2 py-1">
                        {dropdown && dropdown[0].items.map((item, index) => (
                            <button key={index} className="text-xs font-medium flex justify-start items-center gap-2 w-full hover:bg-gray-100 p-1 cursor-pointer"
                            onClick={() => {
                                setSelectItem(item)
                                setIsOpen(false)
                            }}
                            >
                                {selectItem == item ? <Check className="w-3 h-3" /> : <div className="w-3 h-3"></div>}
                                <span>
                                    {item}
                                </span>
                            </button>
                        ))}
                    </div> : ""
                }
            </div>
        </div>
    )
}
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";


const filterOptions = [
  { id: "agbada", label: "Agbada", count: 50 },
  { id: "suits", label: "Suits", count: 25 },
  { id: "native", label: "Native Wear", count: 30 },
  { id: "shirts", label: "Shirts", count: 40 },
]

export default function FilterDialog({ isOpen, setIsOpen, selectedFilters, onFiltersChange } ) {
  const [tempFilters, setTempFilters] = useState(selectedFilters)

  useEffect(() => {
    setTempFilters(selectedFilters)
  }, [selectedFilters])

  const handleFilterToggle = (filterId) => {
    setTempFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    )
  }

  const handleApplyFilters = () => {
    onFiltersChange(tempFilters)
    setIsOpen(false)
  }

  const handleClearAll = () => {
    setTempFilters([])
  }

  return (
    <div className="space-y-3">
      <div className="absolute top-0 left-0 z-100 w-full h-screen bg-black/40 flex justify-center items-center px-4">
        <AnimatePresence>
        <motion.div className="sm:max-w-md space-y-4 w-full bg-white rounded-2xl p-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex justify-between mb-4">
            <div></div>
            <button className="bg-red-100 rounded-full p-1" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <button onClick={() => handleClearAll()}>
                Clear All
              </button>
            </div>

            <div className="space-y-3">
              {filterOptions.map((option) => (
                <div key={option.id} className="w-full flex items-center space-x-3">
                  <label htmlFor={option.id} className="relative flex items-center gap-2 cursor-pointer select-none">

                    <input
                      type="checkbox"
                      id={option.id}
                      checked={tempFilters.includes(option.id)}
                      onChange={() => handleFilterToggle(option.id)}
                      className="peer absolute w-5 h-5 opacity-0 cursor-pointer z-10"
                    />

                    <div className="w-4 h-4 rounded-full border-1 border-gray-400 flex items-center justify-center peer-checked:border-gray-400 peer-checked:bg-black transition">
                      <svg className="w-4 h-4 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <span className="text-sm">{option.label} ({option.count})</span>

                  </label>
                </div>
              ))}
            </div>


            <div className="flex gap-3 pt-4">
              <button onClick={() => setIsOpen((prev) => !prev)} className="flex-1 rounded-md border-1 border-gray-100 hover:bg-gray-200 p-2">
                Cancel
              </button>
              <button onClick={handleApplyFilters} className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-md text-white p-2">
                Apply Filters
              </button>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
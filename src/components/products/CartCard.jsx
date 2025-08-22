import { ChevronRight, Minus, Plus, X } from 'lucide-react'
import DefaultImage from '../../assets/images/defaultImage.jpg'
import { useState } from 'react'


export default function CartCard({cartItem}){
    const [quantity, setQuantity] = useState(null)

    return (
        <div className="flex gap-4 bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="w-2/8 border-1 border-gray-200 rounded-md">
                <img src={cartItem.images?.[0] || DefaultImage} className="w-full h-full rounded-md" alt={`${cartItem.name || "Product"} image`} />
            </div>

            <div className="space-y-4 flex-1">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <h4 className="text-base text-gray-800">{cartItem.name}</h4>
                        <div className="text-[15px] text-gray-800">{cartItem.price}</div>
                    </div>

                    <button className="bg-red-500 border-1 border-gray-200 rounded-full p-0.5">
                        <X className="text-white w-4 h-4" />
                    </button>
                </div>

                <div className="flex justify-between">
                    <div className="text-sm border-1 border-gray-300 rounded-sm flex gap-1 p-1"><span className="text-gray-600">Size: </span> <span>{cartItem.product_size}</span> <button><ChevronRight className="w-4 h-4"/></button> </div>

                        <div className="flex items-center gap-4">
                            <button className="border-1 border-gray-200 hover:bg-[#3f8b72] hover:text-white transition-all ease-in-out duration-300 rounded-sm p-1.5 cursor-pointer"
                                onClick={() => setQuantity(cartItem.quantity > 1 ? cartItem.quantity - 1 : 1)}
                                >
                                <Minus className="w-4 h-4" />
                            </button>

                            <div className="text-base">
                                {!quantity ? cartItem.quantity : quantity}
                            </div>

                            <button className="border-1 border-[#3f8b72]/50 hover:bg-[#3f8b72] hover:text-white transition-all ease-in-out duration-300 rounded-sm p-1.5 cursor-pointer"
                                onClick={() => setQuantity(cartItem.quantity + 1)}
                            >
                                <Plus className=" w-4 h-4" />
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
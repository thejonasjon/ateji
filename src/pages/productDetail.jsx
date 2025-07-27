import { ArrowLeft, Check, ChevronDown, Heart, Minus, Plus, PlusCircle, Share2 } from "lucide-react";
import Dropdown from "../components/ui/Dropdown";
import { useState } from "react";

import DefaultProductImage from '../assets/images/defaultImage.jpg'
import { Link } from "react-router-dom";

export default function ProductDetail(){
    const [isActive, setIsActive] = useState('normal');
    const [quantity, setQuantity] = useState(1)

    const sizes = [
        {
            "title": "Size",
            "items": ["XS", "S", "M", "L", "XL", "XXL"]
        }
    ]

    const colors = [
        {
            "title": "Color",
            "items": ["Black", "Navy Blue", "Royal Blue", "Gold", "Silver"]
        }
    ]
    return (
        <>
            <div className="overscroll-y-auto">
                <div>
                    <div className="relative flex overflow-x-hidden w-full h-3/4">
                        <Link to="/" className="absolute top-3 left-5 bg-black/50 text-white rounded-full p-3 shadow-md">
                            <ArrowLeft className="w-4 h-4"/>
                        </Link>

                        <img
                            src="https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg"
                            alt=""
                            fill
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={DefaultProductImage}
                            alt=""
                            fill
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={DefaultProductImage}
                            alt=""
                            fill
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-3 right-5 rounded-md bg-black/50 text-white text-xs px-4 py-1">
                            <span>1/4</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 p-4">
                    <div className="flex justify-between gap-1">
                        <h4 className="text-2xl font-semibold text-gray-700">Royal Lemon Agbada</h4>
                        <div className="flex gap-2">
                            <Heart className="text-gray-700 w-5 h-5"/>
                            <Share2 className="text-gray-700 w-5 h-5"/>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600">
                        Fabric is good quality, tailoring is made with great attention to details and the finishing is superb. The colors don't run and they don't fade either. This would be an outfit you will rock for a while and then give it out still in it's good condition when you are tired of rocking it. It's super comfortable and easy to wear.
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-sm font-bold">Delivery Type</h5>
                        <div className="flex gap-2">
                            <button className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive == 'normal' ? 'bg-black text-white' : ''}`}
                                onClick={() => setIsActive("normal")}
                            >
                                <p className="text-xs font-extralight">Normal</p>
                                <p className="text-xs my-1">N224,000</p>
                                <p className="text-xs font-extralight">2 Weeks</p>
                            </button>

                            <button className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive == 'express' ? 'bg-black text-white' : ''}`}
                                onClick={() => setIsActive("express")}
                            >
                                <p className="text-xs font-extralight">Express</p>
                                <p className="text-xs font-medium">N224,000</p>
                                <p className="text-xs font-extralight">2 Weeks</p>
                            </button>
                        </div>
                    </div>

                    <Dropdown dropdown={sizes} />
                    <Dropdown dropdown={colors} />

                    <div className="space-y-2">
                        <h5 className="text-sm font-bold">Quantity</h5>
                        <div className="flex items-center gap-4">
                            <button className="border-1 border-gray-200 hover:bg-gray-50 rounded-full p-3 cursor-pointer"
                                onClick={() => setQuantity(quantity > 1 ? quantity-1 : 1)}
                            >
                                <Minus className="text-gray-800 w-4 h-4" />
                            </button>

                            <div className="text-lg">
                                {quantity}
                            </div>

                            <button className="border-1 border-gray-200 hover:bg-gray-50 rounded-full p-3 cursor-pointer"
                                onClick={() => setQuantity(quantity+1)}
                            >
                                <Plus className="text-gray-800 w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <button className="w-full bg-white hover:bg-white/90 border-1 border-gray-200 text-black text-lg rounded-xl p-4 transition-all ease-in-out duration-300">Proceed to checkout</button>
                        <button className="w-full bg-black hover:bg-black/90 text-white text-lg rounded-xl p-4 transition-all ease-in-out duration-300">Add to Cart - 224,00</button>
                    </div>
                </div>
            </div>
        </>
    )
}
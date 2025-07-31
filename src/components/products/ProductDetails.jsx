
import { ArrowLeft, Check, ChevronDown, Heart, Minus, Plus, PlusCircle, Share2 } from "lucide-react";
import Dropdown from "../../components/ui/Dropdown";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function ProductDetails({ product }) {
    const [isActive, setIsActive] = useState(product.deliveryTypes[0].type);
    const [quantity, setQuantity] = useState(1);

    console.log(product.sizes[0].title)

    return (
        <>
            <div className="overscroll-y-auto">
                <div>
                    <div className="relative flex overflow-x-hidden w-full h-3/4">
                        <Link to="/" className="absolute top-3 left-5 bg-black/50 text-white rounded-full p-3 shadow-md">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>

                        {product.images.map((img, index) => (
                            <img key={index}
                                src={img}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        ))}

                        <div className="absolute bottom-3 right-5 rounded-md bg-black/50 text-white text-xs px-4 py-1">
                            <span>1/{product.images.length}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 p-4">
                    <div className="flex justify-between gap-1">
                        <h4 className="text-2xl font-semibold text-gray-700">{product.name}</h4>
                        <div className="flex gap-2">
                            <Heart className="text-gray-700 w-5 h-5" />
                            <Share2 className="text-gray-700 w-5 h-5" />
                        </div>
                    </div>

                    <div className="text-sm text-gray-600">
                        {product.description}
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-sm font-bold">Delivery Type</h5>
                        <div className="flex gap-2">
                            {product.deliveryTypes.map((delivery, index) => (
                                <button key={index}
                                    className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive === delivery.type ? 'bg-black text-white' : ''}`}
                                    onClick={() => setIsActive(delivery.type)}
                                >
                                    <p className="text-xs font-extralight">{delivery.type}</p>
                                    <p className="text-xs my-1">N{delivery.price.toLocaleString()}</p>
                                    <p className="text-xs font-extralight">{delivery.duration}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <Dropdown dropdown={product.sizes} />
                    <Dropdown dropdown={product.colors} />

                    <div className="space-y-2">
                        <h5 className="text-sm font-bold">Quantity</h5>
                        <div className="flex items-center gap-4">
                            <button className="border-1 border-gray-200 hover:bg-gray-50 rounded-full p-3 cursor-pointer"
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                            >
                                <Minus className="text-gray-800 w-4 h-4" />
                            </button>

                            <div className="text-lg">
                                {quantity}
                            </div>

                            <button className="border-1 border-gray-200 hover:bg-gray-50 rounded-full p-3 cursor-pointer"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus className="text-gray-800 w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <button className="w-full bg-white hover:bg-white/90 border-1 border-gray-200 text-black text-lg rounded-xl p-4 transition-all ease-in-out duration-300">
                            Proceed to checkout
                        </button>
                        <button className="w-full bg-black hover:bg-black/90 text-white text-lg rounded-xl p-4 transition-all ease-in-out duration-300">
                            Add to Cart - N{product.price.toLocaleString()}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

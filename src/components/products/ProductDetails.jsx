
import { ArrowLeft, ArrowRight, Check, ChevronDown, Heart, Minus, Plus, PlusCircle, Share2 } from "lucide-react";
import Dropdown from "../../components/ui/Dropdown";
import { useState } from "react";

import { Link } from "react-router-dom";
import { AddToCart } from "../../services/localStorage";

export default function ProductDetails({ product }) {
    const [isActive, setIsActive] = useState('Normal');
    const [quantity, setQuantity] = useState(1);
    const [normalP, setNormalP] = useState(product.price);
    const [expressP, setExpressP] = useState();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [error, setError] = useState(false)

    const dayWeek = (time, express) => {
        express ? time = 7 : time;

        return time % 7 === 0
            ?  `${time / 7} Week${time / 7 > 1 ? 's': ''}`
            : `${time} Day${time > 1 ? 's': ''}`;
    }

    const expressPrice = price => {
        return price ? (price * 25 / 100) + price : 0;
    }

    const handleCheckOut = () => {
        if(selectedSize && selectedColor){
            const selectedProduct = {
                ...product,
                price: isActive === 'Normal' ? normalP : expressP,
                delivery_time: isActive === 'Normal' ? dayWeek(product.delivery_time) : dayWeek(product.delivery_time, 'Express'),
                quantity: quantity,
                product_color: selectedColor,
                product_size: selectedSize
            }
            AddToCart(selectedProduct);
            setError(false)
        } else {
            setError(true)
        }
    }

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
                                alt={product.name + index}
                                className="w-full h-full object-cover"
                            />
                        ))}

                        <div className="flex justify-between absolute w-full h-fit top-1/2 text-white px-6">
                            <button className="bg-black/50 rounded-full p-3 shadow-md">
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button className="bg-black/50 rounded-full p-3 shadow-md">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

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
                            {/* {product.deliveryTypes.map((delivery, index) => (
                                <button key={index}
                                    className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive === delivery.type ? 'bg-black text-white' : ''}`}
                                    onClick={() => setIsActive(delivery.type)}
                                >
                                    <p className="text-xs font-extralight">{delivery.type}</p>
                                    <p className="text-xs my-1">N{delivery.price.toLocaleString()}</p>
                                    <p className="text-xs font-extralight">{delivery.duration}</p>
                                </button>
                            ))} */}

                            <button
                                className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive === 'Normal' ? 'bg-black text-white' : ''}`}
                                onClick={() => {
                                    setIsActive('Normal');
                                    setNormalP(product.price);
                                }}
                                value={normalP}
                            >
                                <p className="text-xs font-extralight">Normal</p>
                                <p className="text-xs my-1">N{product.price.toLocaleString()}</p>
                                <p className="text-xs font-extralight">{dayWeek(product.delivery_time)}</p>
                            </button>
                            <button
                                className={`space-y-1 w-full border-1 border-gray-100 rounded-xl p-2 cursor-pointer ${isActive === 'Express' ? 'bg-black text-white' : ''}`}
                                onClick={() => {
                                    setIsActive('Express');
                                    setExpressP(expressPrice(product.price));
                                }}
                                value={expressP}
                            >
                                <p className="text-xs font-extralight">Express</p>
                                <p className="text-xs my-1">N{expressPrice(product.price).toLocaleString()}</p>
                                <p className="text-xs font-extralight">{dayWeek(product.delivery_time, 'Express')}</p>
                            </button>
                        </div>
                    </div>

                    <div>
                        <Dropdown dropdown={[{
                            "title": "Sizes",
                            "items": product.product_sizes.map(size => size.sizes.abs)
                        }]}
                        onSelect={(size) => setSelectedSize(size)}
                        />
                        { !selectedSize && error &&
                            <p className="text-xs text-red-400">Select cloth size</p>
                        }
                    </div>


                    <div>
                        <Dropdown dropdown={[{
                            "title": "Colors",
                            "items": product.product_colors.map(color => color.colors.name)
                        }]}
                        onSelect={(color) => setSelectedColor(color)}
                        />

                        { !selectedColor && error &&
                            <p className="text-xs text-red-400">Select cloth color</p>
                        }
                    </div>

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
                        <button className="w-full bg-white hover:bg-white/90 border-1 border-gray-200 text-black text-lg rounded-xl p-4 transition-all ease-in-out duration-300"
                        onClick={() => handleCheckOut()}
                        >
                            Proceed to checkout
                        </button>
                        <button className="w-full bg-black hover:bg-black/90 text-white text-lg rounded-xl p-4 transition-all ease-in-out duration-300"
                        onClick={() => handleCheckOut()}
                        >
                            Add to Cart - N{isActive === 'Normal' ? (product.price * quantity).toLocaleString() : (expressPrice(product.price) * quantity).toLocaleString()}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

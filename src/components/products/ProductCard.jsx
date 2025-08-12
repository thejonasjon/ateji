import { Clock, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import {AddToCart} from '../../services/localStorage'
import DefaultProductImage from '../../assets/images/defaultImage.jpg'


export default function ProductCard({product}) {

    return (
        <div>
            <Link to={`/product/${product.id}`}>
                <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-50">
                    <div>
                        {/* Image Container */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-square relative">
                                <img
                                src={product.image}
                                alt={product.name}
                                fill
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-2 space-y-1">
                        {/* Product Name */}
                        <h3 className="font-semibold text-gray-900 text-xs leading-tight line-clamp-2">{product.name}</h3>

                        {/* Price */}
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">₦{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">₦{product.originalPrice.toLocaleString()}</span>
                            )}
                        </div>

                        {/* Delivery Time */}
                        {/* bg-blue-50 rounded-full border border-blue-100 */}
                        <div className="">
                            <div className="flex items-center gap-1 py-1">
                                <Clock className="h-3 w-3 text-gray-700" />
                                <span className="text-xs font-medium text-gray-700">{product.deliveryTime}</span>
                            </div>

                            <div className="mx-auto w-10/12 mt-4">
                                <button className="w-full flex gap-2 items-center justify-center text-white text-xs bg-[#3f8b72] rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl  px-4 py-2"
                                    onClick={() => AddToCart(product)}
                                >
                                <ShoppingCart className="h-4 w-4 text-gray-50" /> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
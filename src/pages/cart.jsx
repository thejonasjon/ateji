import { ChevronLeft, ChevronRight, House, MapPin, Minus, Plus, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

import DefaultImage from '../assets/images/defaultImage.jpg'
import CartCard from "../components/products/CartCard";
import OrderSummary from "../components/products/OrderSumarry";
import { Link } from "react-router-dom";
import AddressCard from "../components/products/addressCard";
import { getCarts } from "../services/localStorage";

export default function Cart(){
    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState([])

    const address = false

    useEffect(() => {
        const carts = getCarts();
        carts ? setCartItems(carts) : setCartItems([]);
    },[])

    return (
        <>
            <div className="flex justify-between items-center bg-gray-50 px-4 py-4 mb-2">
                <Link to="/" className="cursor-pointer">
                    <ChevronLeft className="w-6 h-6" />
                </Link>

                <h4 className="text-xl font-medium">Cart</h4>
                <div></div>
            </div>

            <div className="space-y-10 bg-white">
                <div className="space-y-8 p-4">
                    <div className="">
                    {
                        address ?
                        <AddressCard />
                        :
                        <div className="flex justify-center items-center mb-10">
                            <Link to='/address' className="flex justify-center w-10/12 bg-gray-200 hover:bg-gray-100 transition-all ease-in-out duration-400 text-sm text-gray-950 rounded-lg p-3">Add Shipping Address</Link>
                        </div>
                    }
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        { cartItems
                            ? cartItems.map(cart => {
                                return <CartCard key={cart.id} cartItem={cart} />
                            })
                            : <p>No Items in added yet!</p>
                        }
                    </div>
                </div>

                <OrderSummary cartItems={cartItems} />

                <div className="flex justify-center items-center mb-10">
                    <button className="w-10/12 bg-[#3f8b72]  hover:bg-[#3a6f5e] transition-all ease-in-out duration-400 text-lg text-white rounded-full p-3">Checkout</button>
                </div>
            </div>
        </>
    )
}
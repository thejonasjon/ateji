import { ChevronLeft, ChevronRight, House, MapPin, Minus, Plus, SquarePen } from "lucide-react";
import { useState } from "react";

import DefaultImage from '../assets/images/defaultImage.jpg'

export default function Checkout(){
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <div className="flex justify-between items-center bg-gray-100 px-4 py-4 mb-2">
                <button className="cursor-pointer">
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <h4 className="text-xl font-medium">Checkout</h4>
                <div></div>
            </div>

            <div className="space-y-10 bg-[#fefefe]">
                <div className="space-y-8 p-4">
                    <div className="">
                        <div className="space-y-4 border border-[#3f8b72] rounded-lg px-4 py-4">
                            <div className=" flex justify-between items-center">
                                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#3f8b72]">
                                    <span className="border-1 border-[#3f8b72] rounded-full p-1.5"><House className="h-4 w-4 text-[#3f8b72] " /></span> <span>Delivery Address</span>
                                </div>

                                <div className="flex justify-center items-center gap-1 text-sm text-[#dd6832]">
                                    <SquarePen className="h-4 w-4" /><span>Edit</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">5, Princess Osifeso, Ologufe bus stope, Awoyaya, Lagos.</p>
                                    <div className="text-sm text-gray-600 mt-2">
                                        +234-903-510-3139
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="w-15 h-15 rounded-full">
                                        <img src="https://media.wired.com/photos/67ab9d7199ebae2e3bcfd89f/master/w_1600%2Cc_limit/Gear_Maps_Gulf_Google%2520Maps%2C%2520A.PNG" className="w-full h-full rounded-full" alt="" />
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <MapPin className="w-6 h-6 fill-[#3f8b72] text-white/90" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-4 ">
                            <div className="w-2/8 border-1 border-gray-200 rounded-md">
                                <img src={DefaultImage} className="w-full h-full rounded-md" alt="Image" />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <h4 className="text-base text-gray-800 font-semibold">Men Agbada blue</h4>
                                    <div className="text-base font-medium text-gray-800">50.00</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-base border-1 border-gray-300 rounded-sm flex gap-1 p-1"><span className="text-gray-600">Size: </span> <span>XS</span> <button><ChevronRight className="w-5 h-5"/></button> </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-sm">
                                        Qty: {quantity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 ">
                            <div className="w-2/8 border-1 border-gray-200 rounded-md">
                                <img src={DefaultImage} className="w-full h-full rounded-md" alt="Image" />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <h4 className="text-base text-gray-800 font-semibold">Men Agbada blue</h4>
                                    <div className="text-base font-medium text-gray-800">50.00</div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="text-base border-1 border-gray-300 rounded-sm flex gap-1 p-1"><span className="text-gray-600">Size: </span> <span>XS</span> <button><ChevronRight className="w-5 h-5"/></button> </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-sm">
                                        Qty: {quantity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 ">
                            <div className="w-2/8 border-1 border-gray-200 rounded-md">
                                <img src={DefaultImage} className="w-full h-full rounded-md" alt="Image" />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <h4 className="text-base text-gray-800 font-semibold">Men Agbada blue</h4>
                                    <div className="text-base font-medium text-gray-800">50.00</div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="text-base border-1 border-gray-300 rounded-sm flex gap-1 p-1"><span className="text-gray-600">Size: </span> <span>XS</span></div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-sm">
                                        Qty: {quantity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-1.5 bg-white border-t-8 border-t-[#3f8b72]/5 p-4">
                    <h4 className="text-lg font-medium text-gray-800">Order Summary</h4>
                    <div className="flex justify-between">
                        <div className="text-base text-gray-600">
                            Subtotal
                        </div>
                        <div className="text-base text-gray-700">
                            $100.00
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-base text-gray-600">
                            Discount
                        </div>
                        <div className="text-sm text-gray-700">
                            $00.00
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-base font-medium text-gray-800">
                            Total
                        </div>
                        <div className="text-base font-bold text-gray-600">
                            $100.00
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-10">
                    <button className="w-10/12 bg-[#3f8b72]  hover:bg-[#3a6f5e] transition-all ease-in-out duration-400 text-lg text-white rounded-full p-3">Checkout</button>
                </div>
            </div>
        </>
    )
}
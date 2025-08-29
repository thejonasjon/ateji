import { CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccessful(){
    return (
        <main>
            <div className="w-full h-screen flex flex-col justify-between py-8">
                <div className="w-fit bg-gradient-to-b from-[#e2fffe] to-[#f7fcfc] rounded-full mx-auto p-6">
                    <div className="w-fit bg-[#0c6a69] rounded-full p-8">
                        <CheckCheck className="text-white w-8 h-8"/>
                    </div>
                </div>

               <div className="space-y-6 w-11/12 mx-auto">
                    <div className="text-center">
                        <h3 className="text-2xl text-gray-600">Congratulations!</h3>
                        <p className="text-base text-gray-500">You have successfully placed an order.</p>
                    </div>

                    <div className="w-full bg-gray-100/80 rounded-xl p-4">
                        <div className="flex justify-between border-b-1 border-gray-200 py-4">
                            <span className="text-base text-gray-600">Product:</span><span className="text-base text-gray-900">Agbada x 3</span>
                        </div>

                        <div className="flex justify-between border-b-1 border-gray-200 py-4">
                            <span className="text-base text-gray-600">Delivery Date:</span><span className="text-base text-gray-900">20 July 2025</span>
                        </div>

                        <div className="flex justify-between py-4">
                            <span className="text-base text-gray-600">Total:</span><span className="text-base text-gray-900">240,000</span>
                        </div>
                    </div>
               </div>

                <div className="flex justify-center items-center">
                    <Link to="/" className="w-10/12 flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-700 transition-all ease-in-out duration-400 text-lg text-white rounded-full p-3">Go Home</Link>
                </div>
            </div>
        </main>
    )
}
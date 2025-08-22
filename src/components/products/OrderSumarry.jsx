import { useEffect, useState } from "react";


export default function OrderSummary({cartItems}){
    const [discount, setDiscount] = useState();
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState();

    useEffect(() => {
        if(cartItems && cartItems.length > 0){
            const subT = cartItems.reduce((sum, item) => {
                return sum + (item.price * (item.quantity || 1));
            }, 0);

            setSubTotal(subT);
            const discountValue = discount || 0;
            setTotal(subT - discountValue);
        } else {
            setSubTotal(0);
            setTotal(0);
        }
    }, [cartItems, discount])

    return (
        <div className="space-y-1.5 bg-white border-t-8 border-t-[#3f8b72]/5 p-4">
            <h4 className="text-lg font-medium text-gray-800">Order Summary</h4>
            <div className="flex justify-between">
                <div className="text-base text-gray-600">
                    Subtotal
                </div>
                <div className="text-base text-gray-700">
                ₦{subTotal.toFixed(2)}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-base text-gray-600">
                    Discount
                </div>
                <div className="text-sm text-gray-700">
                ₦{discount ? discount.toFixed(2) : 0.00.toFixed(2)}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-base font-medium text-gray-800">
                    Total
                </div>
                <div className="text-base font-bold text-gray-600">
                ₦{total && total.toFixed(2)}
                </div>
            </div>
        </div>
    )
}


export default function OrderSummary(){
    return (
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
    )
}
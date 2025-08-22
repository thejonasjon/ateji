export default function AddressCard(){


    return (
        <div className="space-y-4 border border-[#3f8b72] rounded-lg px-4 py-4">
            <div className=" flex justify-between items-center">
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#3f8b72]">
                    <span className="border-1 border-[#3f8b72] rounded-full p-1.5"><House className="h-4 w-4 text-[#3f8b72] " /></span> <span>Delivery Address</span>
                </div>
                <Link to="/address" className="flex justify-center items-center gap-1 text-sm text-[#dd6832]">
                    <SquarePen className="h-4 w-4" /><span>Edit</span>
                </Link>
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
    )
}
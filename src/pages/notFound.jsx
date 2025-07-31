import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="w-full h-screen flex justify-center bg-gray-50 items-center px-4">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">404 - Page Not Found</h3>
                <p className="text-base text-gray-700 text-center">The page your're looking for might have been removed, had its name changed or temporarily unavailable.</p>

                <div className="w-fit mx-auto mt-8">
                <Link to={'/'} className="text-base font-normal text-white bg-blue-900 hover:bg-blue-900/90 transition-all easein-out duration-500 rounded-sm px-8 py-4 cursor-pointer">
                    GO TO HOMEPAGE
                </Link>
                </div>
            </div>
        </div>
    )
}
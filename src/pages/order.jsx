import { Archive, Calendar, CheckCheck, Clock9, Dot } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/navigations/Navbar";

export default function Order(){
    return (
        <>
            <main className="bg-gray-50 space-y-4">
                <div className="bg-white space-y-4 py-4">
                    <div className="w-11/12 mx-auto">
                        <h2 className="text-2xl font-normal text-gray-700">Orders</h2>
                    </div>

                    <div className="flex gap-1 w-11/12 mx-auto text-lg  text-gray-700 bg-gray-100 rounded-xl">
                        <button className="w-full bg-white border-3 border-gray-100 rounded-xl py-2.5">In progress</button>
                        <button className="w-full rounded-2xl py-2.5">History</button>
                    </div>
                </div>

                <div className="bg-white px-4">
                <div className="flex gap-2 border-b-2 border-gray-100 py-6">
                        <div className="w-fit h-fit bg-gray-200 rounded-full p-3">
                            <Archive className="w-4 h-4" />
                        </div>

                        <div className="text-base">
                            <div className="flex items-center">
                                <span className="text-lg font-medium text-gray-500">Abraham Adesonya</span>
                                <span className="flex justify-center items-center"><Dot className="w-6 h-6 text-gray-400" /></span>
                                <span className="text-gray-500">Order #1234</span>
                            </div>
                            <div className="flex text-base text-gray-400">
                                <div className="flex justify-center items-center gap-0.5">
                                    <span>50 pices </span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Clock9 className="w-4 h-4" />
                                    <span> 12:55 am</span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Calendar className="w-4 h-4" />
                                    <span> 12-07-2025</span>
                                </div>

                                    {/* <Clock9 className="w-4 h-4" /> 12:55 am</span><Dot className="w-4 h-4" /> <span><Calendar className="w-4 h-4" /> 12-07-2025</span></span> */}
                            </div>
                        </div>
                </div>

                <div className="flex gap-2 border-b-2 border-gray-100 py-6">
                        <div className="w-fit h-fit bg-gray-200 rounded-full p-3">
                            <Archive className="w-4 h-4" />
                        </div>

                        <div className="text-base">
                            <div className="flex items-center">
                                <span className="text-lg font-medium text-gray-500">Abraham Adesonya</span>
                                <span className="flex justify-center items-center"><Dot className="w-6 h-6 text-gray-400" /></span>
                                <span className="text-gray-500">Order #1234</span>
                            </div>
                            <div className="flex text-base text-gray-400">
                                <div className="flex justify-center items-center gap-0.5">
                                    <span>50 pices </span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Clock9 className="w-4 h-4" />
                                    <span> 12:55 am</span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Calendar className="w-4 h-4" />
                                    <span> 12-07-2025</span>
                                </div>

                                    {/* <Clock9 className="w-4 h-4" /> 12:55 am</span><Dot className="w-4 h-4" /> <span><Calendar className="w-4 h-4" /> 12-07-2025</span></span> */}
                            </div>
                        </div>
                </div>

                <div className="flex gap-2 border-b-2 border-gray-100 py-6">
                        <div className="w-fit h-fit bg-gray-200 rounded-full p-3">
                            <Archive className="w-4 h-4" />
                        </div>

                        <div className="text-base">
                            <div className="flex items-center">
                                <span className="text-lg font-medium text-gray-500">Abraham Adesonya</span>
                                <span className="flex justify-center items-center"><Dot className="w-6 h-6 text-gray-400" /></span>
                                <span className="text-gray-500">Order #1234</span>
                            </div>
                            <div className="flex text-base text-gray-400">
                                <div className="flex justify-center items-center gap-0.5">
                                    <span>50 pices </span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Clock9 className="w-4 h-4" />
                                    <span> 12:55 am</span>
                                    <Dot className="w-6 h-6" />
                                </div>

                                <div className="flex justify-center items-center gap-0.5">
                                    <Calendar className="w-4 h-4" />
                                    <span> 12-07-2025</span>
                                </div>

                                    {/* <Clock9 className="w-4 h-4" /> 12:55 am</span><Dot className="w-4 h-4" /> <span><Calendar className="w-4 h-4" /> 12-07-2025</span></span> */}
                            </div>
                        </div>
                </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Navbar />
            </footer>
        </>
    )
}
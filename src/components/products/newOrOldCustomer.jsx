import { X } from "lucide-react";
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../services/localStorage";

export default function NewOrOldCustomer({address, setAddress}){
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handlePhoneSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data, error} = await supabase
            .from('customer')
            .select('*')
            .eq('phone', phone)
            .maybeSingle();

            if (error){
                console.error('Error fetching customer:', error.message)
                throw error
            }

            if (data) {
                addAddress(data);
                setAddress(true);
                return data
            }

            navigate('/address')

        } catch (err) {
            console.error('Unexpected error:', err.message);
        }
    }

    return (
        <section>
            <div className={`${address ? 'hidden': 'block'} absolute inset-0 z-[100]  bg-black/40 flex items-center justify-center`}>
                <div className="relative bg-white inset-0 z-[100] w-10/12 rounded-md space-y-6 pb-6">
                    <button className="absolute right-2 top-2 bg-gray-100 rounded-full p-1.5"
                    onClick={() => setAddress(true)}
                    >
                        <X className="text-gray-800 w-4 h-4"/>
                    </button>
                    <h2 className="text-xl text-balance font-medium text-gray-900 text-center mt-10">Enter Phone</h2>
                    <div className="text-[11px] text-gray-700 bg-amber-100 p-4">
                        We using the number to be able display address if you ever order or use the app. or display order history and help us to allocate appropriate discount in future.
                    </div>
                    <div>
                        <form onSubmit={handlePhoneSubmit}>
                        <div className="mx-auto px-6">
                                <label htmlFor="phone" className="text-md text-gray-600 block mb-1">Phone Number <span className="text-red-400">*</span></label>
                                <input type="tel" pattern="[0-9+\s\-\(\)]*" maxLength="20" autoComplete="tel" placeholder="Enter your phone number" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-300 ${errors.phone ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/[^0-9+ ]/g, ''))}
                                />
                                {errors.phone && <p className="text-xs mt-1 text-red-400">{errors.phone}</p>}
                            </div>

                            <div className="mx-auto px-6 mt-4">
                                <button className="flex justify-center items-center w-full text-md border border-gray-200 font-normal bg-gray-100 h-12 rounded-md"
                                type="submit"
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
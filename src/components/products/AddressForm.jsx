import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getOrCreateCustomer } from "../../services/api";
import { addAddress, getAddress } from "../../services/localStorage";

export default function AddressForm({addressForm}){
    const savedAddress = getAddress()

    const [firstName, setFirstName] = useState(savedAddress?savedAddress.first_name:"");
    const [lastName, setLastName] = useState(savedAddress?savedAddress.last_name:"");
    const [address, setAddress] = useState(savedAddress?savedAddress.address_line_1:"");
    const [ZIP, setZIP] = useState(savedAddress?savedAddress.zip_code:"");
    const [phone, setPhone] = useState(savedAddress?savedAddress.phone:"");
    const [city, setCity] = useState(savedAddress?savedAddress.city:"");
    const [state, setState] = useState(savedAddress?savedAddress.state:"");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";
        if (!address.trim()) newErrors.address = "Address is required";
        if (!ZIP.trim()) newErrors.ZIP = "ZIP Code is required";
        if (!phone.trim()) newErrors.phone = "Phone is required";
        if (!city.trim()) newErrors.city = "City is required";
        if (!state.trim()) newErrors.state = "State is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
               const customer = await getOrCreateCustomer({
                    first_name: firstName,
                    last_name: lastName,
                    address_line_1: address,
                    zip_code: ZIP,
                    phone,
                    city,
                    state,
                });
                navigate('/cart')
                return addAddress(customer)
            } catch (error) {
                console.error("Error submitting form:", error.message);
            }
        }
    }


    return (
        <>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <Link to='/cart'>
                        <ChevronLeft />
                    </Link>

                    {addressForm.new ? <h4 className="text-xl text-gray-800">Enter Shipping Address</h4> : <h4 className="text-xl text-gray-800">Update Shipping Address</h4>}

                    <div>

                    </div>
                </div>
                <form className="space-y-6" onSubmit={handleSubmitForm}>
                    <div className="relative">
                        <label htmlFor="firstName" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">First Name <span className="text-red-400">*</span></label>
                        <input type="text" id="firstName" placeholder="Enter your first name" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.firstName ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p className="text-xs mt-1 text-red-400">{errors.firstName}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="lastName" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">Last Name <span className="text-red-400">*</span></label>
                        <input type="text" placeholder="Enter your last name" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.lastName ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p className="text-xs mt-1 text-red-400">{errors.lastName}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="addressLine1" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">Address Line 1 <span className="text-red-400">*</span></label>
                        <input type="text" placeholder="Enter your address" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.address ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                        value={address}
                        onChange={(e) =>  setAddress(e.target.value)}
                        />
                        {errors.address && <p className="text-xs mt-1 text-red-400">{errors.address}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="apt" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">Building, Apartment, Floor, Unit (Optional)</label>
                        <input type="text" placeholder="Enter your building, apartment, floor, unit number" className="w-full text-sm text-gray-700 border focus:outline-[#3f8b72] focus:outline-1 focus:border-0 border-gray-400 rounded-md transition-all ease-in-out duration-100 px-6 py-2.5" />
                    </div>

                    <div className="relative">
                        <label htmlFor="zip" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">ZIP Code <span className="text-red-400">*</span></label>
                        <input type="text" placeholder="Enter your ZIP code" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.ZIP ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                        value={ZIP}
                        onChange={(e) => setZIP(e.target.value)}
                        />
                        {errors.ZIP && <p className="text-xs mt-1 text-red-400">{errors.ZIP}</p>}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <label htmlFor="state" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">State <span className="text-red-400">*</span></label>
                            <input type="text" placeholder="Enter your state" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.state ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            />
                            {errors.city && <p className="text-xs mt-1 text-red-400">{errors.city}</p>}
                        </div>

                        <div className="relative">
                            <label htmlFor="city" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">City <span className="text-red-400">*</span></label>
                            <input type="text" placeholder="Enter your city" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.city ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />
                            {errors.city && <p className="text-xs mt-1 text-red-400">{errors.city}</p>}
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="phone" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">Phone <span className="text-red-400">*</span></label>
                        <input type="tel" pattern="[0-9+\s\-\(\)]*" maxLength="20" autoComplete="tel" placeholder="Enter your phone number" className={`w-full text-sm text-gray-700 border focus:outline-1 focus:border-0 border-gray-400 ${errors.phone ? 'focus:outline-red-400 border-red-400' : 'focus:outline-[#3f8b72]'} rounded-md transition-all ease-in-out duration-100 px-6 py-2.5`}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/[^0-9+ ]/g, ''))}
                        />
                        {errors.phone && <p className="text-xs mt-1 text-red-400">{errors.phone}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="country" className="absolute -top-2 left-4 bg-white text-xs text-gray-500 px-2">Country <span className="text-red-400">*</span></label>
                        <input type="text" placeholder="Enter your phone number" value="Nigeria" className="w-full text-sm text-gray-400 border focus:outline-1 border-gray-400 rounded-md transition-all ease-in-out duration-100 px-6 py-2.5" disabled />
                    </div>

                    <div>
                        {/* bg-[#3f8b72] */}
                        <button className="flex justify-center items-center w-full text-lg text-white font-normal bg-gradient-to-r from-gray-900 to-gray-700 h-12 rounded-md"
                        type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
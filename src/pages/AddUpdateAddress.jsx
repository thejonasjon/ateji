import AddressForm from "../components/products/AddressForm";
import { getAddress } from "../services/localStorage";

export default function AddressFormPage(){
    const addressForm = getAddress();

    addressForm ? {
        "new": false,
        "fields": addressForm
    }
    : {
        "new": true,
        "fields": {}
    }

    return (
        <>
            <div className="p-4">
                <AddressForm addressForm={addressForm}/>
            </div>
        </>
    )
}
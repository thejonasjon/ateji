import AddressForm from "../components/products/addressCard";

export default function AddressFormPage(){
    const addressForm = {
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
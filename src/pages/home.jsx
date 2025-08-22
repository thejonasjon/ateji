import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import Navbar from "../components/navigations/Navbar"
import ProductCard from "../components/products/ProductCard"
import { FetchProducts } from "../services/api"
import NewOrOldCustomer from "../components/products/newOrOldCustomer"
import { getAddress } from "../services/localStorage"

export default function Home() {
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchState, setSearchState] = useState({ results: [], notFound: false });

    useEffect(() => {
        const checkAddress = getAddress();
        checkAddress ? setAddress(true) : setAddress(false);
    }, []);

    useEffect(() => {
        async function loadProducts() {
        try {
            const data = await FetchProducts();
            setProducts(data);
        } catch (err) {
            setError("Failed to load products. Please try again later.")
            console.error(err);
        } finally {
            setLoading(false);
        }
        }
        loadProducts();
    }, []);

    const visibleProducts = searchState.results.length > 0 ? searchState.results : products;

    return (
        <>
            <NewOrOldCustomer address={address} setAddress={setAddress} />

            <header className="sticky z-10 top-0 border-b-1 border-gray-100 backdrop-blur-lg">
                <Header onSearchResults={setSearchState} />
            </header>

            {/* Product lists */}
            <main className="px-4 mb-30 overscroll-y-auto">
                <div className="grid grid-cols-2 gap-2">
                {loading ? (
                    <section>
                        <div className="absolute left-1/3 top-1/2 text-center text-xl text-gray-400">
                            Loading...
                        </div>
                    </section>
                ) : error ? (
                    <section>
                        <div className="absolute left-2/5 top-1/2 text-center text-red-500">
                            {error}
                        </div>
                    </section>
                ) : searchState.notFound ? (
                    <section>
                        <div className="absolute left-1/5 top-1/2 text-center text-gray-400">
                            No products found for your search.
                        </div>
                    </section>
                ) : visibleProducts.length > 0 ? (
                        visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <section>
                    <div className="absolute left-2/5 top-1/2 text-center text-gray-400">
                        No products found.
                    </div>
                    </section>
                )}
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Navbar />
            </footer>
        </>
    )
}

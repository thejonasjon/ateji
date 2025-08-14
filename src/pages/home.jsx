import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import Navbar from "../components/navigations/Navbar"
import CategoryCard from "../components/products/CategoryCard"
import FilterDialog from "../components/products/FilterDialog"
import ProductCard from "../components/products/ProductCard"
import { FetchProducts } from "../services/api"


export default function Home() {
    const [products, setProducts] = useState([])

    const productss = [
        {
            id: 1,
            name: "Royal Agbada Premium",
            description: "Luxurious gold-embroidered agbada perfect for special occasions",
            price: 340000,
            originalPrice: 420000,
            deliveryTime: "2 Weeks",
            rating: 4.8,
            image: "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
          },
          {
            id: 2,
            name: "Traditional Native Wear",
            description: "Authentic Nigerian native wear with intricate patterns",
            price: 180000,
            deliveryTime: "1 Week",
            rating: 4.6,
            image: "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
          },
          {
            id: 3,
            name: "Executive Business Suit",
            description: "Premium tailored suit for the modern professional",
            price: 280000,
            originalPrice: 350000,
            deliveryTime: "3 Weeks",
            rating: 4.9,
            image: "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
          },

          {
            id: 4,
            name: "White Polo Cooperate",
            description: "Premium tailored suit for the modern professional",
            price: 20000,
            originalPrice: 320000,
            deliveryTime: "1 Week",
            rating: 4.1,
            image: "https://shoposaze.com/wp-content/uploads/2023/03/deji-eniola.jpg",
          }
    ]

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await FetchProducts()
                setProducts(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        loadProducts()
    }, [])


    return (
        <>
            <header className="sticky z-10 top-0 border-b-1 border-gray-100 backdrop-blur-lg">
                <Header />
            </header>

            {/* <div>
            < FilterDialog />
            </div> */}

            {/* Product lists */}
            <main className="px-4 mb-30 overscroll-y-auto">
                <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Navbar />
            </footer>
        </>
    )
}
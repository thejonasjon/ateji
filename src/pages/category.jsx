import { Header } from "../components/Header"
import Navbar from "../components/navigations/Navbar"
import CategoryCard from "../components/products/CategoryCard"

export default function Category() {
    const categories = [
        {
            id: 1,
            name: "Suites",
            count: 90,
            image: "https://image.kgstores.com/is/image/marketing/24-4155012-fresh-groom-2-lb-desktop-2x.jpg?impolicy=FEWD&im=Resize,width=672&qlt=85",
          },
          {
            id: 2,
            name: "Agbada",
            count: 80,
            image: "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
          },
          {
            id: 3,
            name: "Shirts",
            count: 20,
            image: "https://shoposaze.com/wp-content/uploads/2023/03/deji-eniola.jpg",
          },

          {
            id: 4,
            name: "Native Styles",
            count: 50,
            image: "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6896-scaled.jpeg",
          }
    ]

    return (
        <>
            <header>
                <Header />
            </header>

            {/* Product lists */}
            <main className="px-4 mb-30 space-y-4">
                <h2 className="text-2xl text-gray-800 font-bold">Categories</h2>
                <div className="grid grid-cols-2 gap-2 gap-y-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
                </div>
            </main>
            <footer>
                <Navbar />
            </footer>
        </>
    )
}
import ProductDetails from '../components/products/ProductDetails';
// import productData from '../data/products';

const product = {
    id: 1,
    name: "Royal Lemon Agbada",
    description: "Fabric is good quality, tailoring is made with great attention to details and the finishing is superb...",
    price: 224000,
    deliveryTypes: [
        { type: "Normal", price: 224000, duration: "2 Weeks" },
        { type: "Express", price: 250000, duration: "1 Week" }
    ],
    sizes: [{
        "title": "Size",
        "items": ["XS", "S", "M", "L", "XL", "XXL"]
    }],
    colors: [{
        "title": "Color",
        "items": ["Black", "Navy Blue", "Royal Blue", "Gold", "Silver"]
    }],
    images: [
        "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
        // DefaultProductImage,
        // DefaultProductImage
    ]
}


export default function ProductDetailsPage() {
    // const product = productData[0];

    return <ProductDetails product={product} />;
}

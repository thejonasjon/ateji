import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/products/ProductDetails';
import { FetchProduct } from '../services/api';
// import productData from '../data/products';



// const product = {
//     id: 1,
//     name: "Royal Lemon Agbada",
//     description: "Fabric is good quality, tailoring is made with great attention to details and the finishing is superb...",
//     price: 224000,
//     deliveryTypes: [
//         { type: "Normal", price: 224000, duration: "2 Weeks" },
//         { type: "Express", price: 250000, duration: "1 Week" }
//     ],
//     sizes: [{
//         "title": "Size",
//         "items": ["XS", "S", "M", "L", "XL", "XXL"]
//     }],
//     colors: [{
//         "title": "Color",
//         "items": ["Black", "Navy Blue", "Royal Blue", "Gold", "Silver"]
//     }],
//     images: [
//         "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg",
//         // DefaultProductImage,
//         // DefaultProductImage
//     ]
// }

const product = {
    id: "46daedc5-d29a-413a-af29-dc0f7e6cf646",
    name: "Executive Business Suit",
    description: "Premium tailored suit for the modern professional",
    price: 280000,
    delivery_time: 21,
    created_at: "2025-08-12T15:38:00.744932",
    images: ["https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg", "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg", "https://shoposaze.com/wp-content/uploads/2023/05/IMG_6932-scaled.jpeg"],
    product_colors: [
      { colors: { name: "White" } },
      { colors: { name: "Black" } },
      { colors: { name: "Navy Blue" } },
      { colors: { name: "Royal Blue" } },
      { colors: { name: "Gold" } },
      { colors: { name: "Silver" } }
    ],
    product_sizes: [
      { sizes: { abs: "XS", name: "Extra Small" } },
      { sizes: { abs: "S", name: "Small" } },
      { sizes: { abs: "M", name: "Medium" } },
      { sizes: { abs: "L", name: "Large" } },
      { sizes: { abs: "XL", name: "Extra Large" } },
      { sizes: { abs: "XXL", name: "Double Extra Large" } }
    ]
  };


export default function ProductDetailsPage() {
    const { id } = useParams();
    // const product = productData[0];
    // const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //    const loadData = async () => {
    //     try {
    //         const data = await FetchProduct(id);
    //         setProduct(data);
    //     } catch (error) {
    //         console.error('Failed to fetch product:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    //    }
    //    loadData()
    // },[id])

    // if (loading) return <p>Loading...</p>;
    // if (!product) return <p>Product not found</p>;
    return <ProductDetails product={product} />;
}

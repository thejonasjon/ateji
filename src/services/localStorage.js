
// Get all cart items
export const getCarts = () => {
    const data = localStorage.getItem('addedToCart');

    try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

export const getCartCount = () => {
    const data = localStorage.getItem('addedToCart');

    if (!data) {
        return 0;
    }

    try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed.length : 0;
    } catch (error) {
        console.error('Error parsing cart data:', error);
        return 0;
    }
}


// Add item to cart
export const AddToCart = (product) => {
    const carts = getCarts();

    const existingProductIndex = carts.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        carts[existingProductIndex] = {
            ...carts[existingProductIndex],
            ...product,
            quantity: (carts[existingProductIndex].quantity || 0) + (product.quantity || 1)
        };
    } else {
        carts.push({ ...product, quantity: product.quantity || 1 });
    }

    localStorage.setItem("addedToCart", JSON.stringify(carts));
}

// Delete item from cart
export const removeFromCart = (productId) => {
    const carts = getCarts()

    if (carts){
        carts = carts.filter(item => item.id !== productId);

        localStorage.setItem('productCart', JSON.stringify(carts));
    }
}

export const getAddress = () => {
    const address = localStorage.getItem('customerAddress');
    address ? JSON.parse(address) : ''
    if (address){
        return JSON.parse(address);
    }

    return ''
}

export const addAddress = (address) => {
    localStorage.setItem('customerAddress', JSON.stringify(address))
}
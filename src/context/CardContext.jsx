import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // localStorage ni har safar cart o'zgarganda yangilash
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((p) => p.id === item.id);
            if (existingItem) {
                return prevCart.map((p) =>
                    p.id === item.id ? { ...p, count: p.count + 1 } : p
                );
            } else {
                return [...prevCart, { ...item, count: 1 }];
            }
        });
    };

    const updateQuantity = (id, amount) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) =>
                    item.id === id ? { ...item, count: item.count + amount } : item
                )
                .filter((item) => item.count > 0);
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

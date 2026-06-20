import { useState } from "react";
import "./POS.css";
import products from "../data/products";
import { useRestaurant } from "../context/RestaurantContext";

export default function POS() {
    const { createOrder } = useRestaurant();
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [searchTerm, setSearchTerm] =
        useState("");

    const addToCart = (product) => {
        const existing = cart.find(
            (item) => item.id === product.id
        );

        if (existing) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        const order = {
            id: Date.now(),
            table: "T1",
            items: cart,
            total,
            status: "Pending",
        };

        createOrder(order);

        alert("Order Created");
    };

    const filteredProducts = products.filter(
        (product) => {
            const categoryMatch =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );

            return categoryMatch && searchMatch;
        }
    );

    return (
        <div className="pos-container">
            {/* Categories */}

            <div className="panel">
                <h3>Categories</h3>

                <div className="categories">
                    {[
                        "All",
                        "Pizza",
                        "Burger",
                        "Drinks",
                        "Sides",
                    ].map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category
                                ? "active-category"
                                : ""
                                }`}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products */}

            <div className="panel">
                <h3>Products</h3>

                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />

                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => addToCart(product)}
                        >
                            <div className="product-icon">
                                {product.emoji}
                            </div>

                            <div className="product-name">
                                {product.name}
                            </div>

                            <div className="product-category">
                                {product.category}
                            </div>

                            <div className="product-price">
                                ₹ {product.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart */}

            <div className="panel cart-section">
                <h3>🛒 Current Order</h3>

                <div className="cart-body">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            🛒

                            <p>No items yet</p>

                            <small>
                                Select products to start an order
                            </small>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="cart-item"
                            >
                                <div>
                                    <strong>{item.name}</strong>

                                    <div>
                                        ₹ {item.price}
                                    </div>
                                </div>

                                <div className="qty-controls">
                                    <button
                                        onClick={() =>
                                            decreaseQty(item.id)
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQty(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="total-section">
                    <div className="total-row">
                        <span>Total</span>
                        <strong>₹ {total}</strong>
                    </div>
                </div>
                <button
                    className="checkout-btn"
                    onClick={handleCheckout}
                >
                    Create Order
                </button>
            </div>
        </div>
    );
}
import { useRestaurant } from "../context/RestaurantContext";
import "./Orders.css";

export default function Orders() {
    const { orders } = useRestaurant();

    console.log(orders);

    return (
        <div>
            <h1>Orders</h1>

            <div className="orders-grid">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="order-card"
                    >
                        <h3>{order.id}</h3>

                        <p>Table: {order.table}</p>

                        <p>₹ {order.amount}</p>

                        <span
                            className={`status ${order.status.toLowerCase()}`}
                        >
                            {order.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
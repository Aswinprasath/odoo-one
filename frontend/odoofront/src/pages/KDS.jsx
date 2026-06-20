import { useRestaurant } from "../context/RestaurantContext";
import "./KDS.css";



export default function KDS() {
    const { orders } = useRestaurant();
    return (
        <div>
            <h1>Kitchen Display System</h1>

            <div className="kds-grid">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="kds-card"
                    >
                        <h2>Order #{order.id}</h2>

                        <p>Table: {order.table}</p>

                        <div className="kds-items">

                            {order.items.map((item) => (
                                <div key={item.id}>
                                    • {item.name} x {item.quantity}
                                </div>
                            ))}

                        </div>

                        <div className="kds-footer">
                            <span>{order.time}</span>

                            <button>
                                Complete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
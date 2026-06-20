import { useEffect, useState } from "react";
import api from "../services/api";
import "./Orders.css";

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        api.get("/orders")
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div>
            <h1>Orders</h1>

            <div className="orders-grid">

                {orders.map((order) => (

                    <div
                        key={order.id}
                        className="order-card"
                    >
                        <h3>Order #{order.id}</h3>

                        <p>
                            Table: {order.table_id}
                        </p>

                        <p>
                            ₹ {order.total}
                        </p>

                        <span
                            className={`status ${order.status}`}
                        >
                            {order.status}
                        </span>

                    </div>

                ))}

            </div>
        </div>
    );
}
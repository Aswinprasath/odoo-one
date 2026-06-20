import { useEffect, useState } from "react";
import api from "../services/api";
import "./KDS.css";

export default function KDS() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = () => {

        api.get("/orders")
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    const completeOrder = (id) => {

        api.put(`/orders/${id}/completed`)
            .then(() => {

                loadOrders();

            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <div>

            <h1>Kitchen Display System</h1>

            <div className="kds-grid">

                {orders.map((order) => (

                    <div
                        key={order.id}
                        className="kds-card"
                    >

                        <h2>
                            Order #{order.id}
                        </h2>

                        <p>
                            Table: {order.table_id}
                        </p>

                        <p>
                            Status: {order.status}
                        </p>

                        <p>
                            Total: ₹{order.total}
                        </p>

                        <div className="kds-footer">

                            <button
                                onClick={() =>
                                    completeOrder(order.id)
                                }
                            >
                                Complete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Payments() {

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

    const payOrder = (id) => {

        api.put(`/orders/${id}/pay`, {
            payment_method: "UPI"
        })
        .then(() => {
            alert("Payment Successful");
            loadOrders();
        })
        .catch((err) => {
            console.log(err);
        });

    };

    return (
        <div>

            <h1>Payments</h1>

            {orders.map((order) => (

                <div
                    key={order.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        margin: "10px"
                    }}
                >

                    <h3>Order #{order.id}</h3>

                    <p>Total: ₹{order.total}</p>

                    <p>Status: {order.payment_status}</p>

                    <button
                        onClick={() => payOrder(order.id)}
                    >
                        Pay with UPI
                    </button>

                </div>

            ))}

        </div>
    );
}
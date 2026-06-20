import { useEffect, useState } from "react";
import api from "../services/api";

export default function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        api.get("/customers")
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div>
            <h1>Customers</h1>

            {customers.map((customer) => (

                <div
                    key={customer.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        margin: "10px"
                    }}
                >
                    <h3>{customer.name}</h3>

                    <p>Email: {customer.email}</p>

                    <p>Phone: {customer.phone}</p>

                </div>

            ))}
        </div>
    );
}
import { useEffect, useState } from "react";
import api from "../services/api";
import "./Tables.css";

export default function Tables() {

    const [tables, setTables] = useState([]);

    useEffect(() => {

        api.get("/tables")
            .then((res) => {
                console.log(res.data);
                setTables(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div>
            <h1>Restaurant Floor</h1>

            <div className="tables-grid">

                {tables.map((table) => (

                    <div
                        key={table.id}
                        className="table-card"
                    >
                        <h2>Table {table.table_number}</h2>

                        <p>
                            Seats: {table.seats}
                        </p>

                        <p>
                            Floor: {table.floor_name}
                        </p>

                    </div>

                ))}

            </div>
        </div>
    );
}
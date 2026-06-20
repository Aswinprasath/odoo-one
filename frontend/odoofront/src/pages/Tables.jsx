import { useRestaurant } from "../context/RestaurantContext";
import "./Tables.css";


export default function Tables() {
    const { tables } = useRestaurant();
    return (
        <div>
            <h1>Restaurant Floor</h1>

            <div className="tables-grid">
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`table-card ${table.status}`}
                    >
                        <h2>{table.name}</h2>

                        <p>{table.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
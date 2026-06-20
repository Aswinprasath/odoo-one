import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
    const [orders, setOrders] = useState([]);
    

    const [tables, setTables] = useState([
        { id: 1, name: "T1", status: "available" },
        { id: 2, name: "T2", status: "available" },
        { id: 3, name: "T3", status: "available" },
        { id: 4, name: "T4", status: "available" },
        { id: 5, name: "T5", status: "available" },
        { id: 6, name: "T6", status: "available" },
    ]);

    const createOrder = (order) => {

        setOrders((prev) => [...prev, order]);

        setTables((prev) =>
            prev.map((table) =>
                table.name === order.table
        
                    ? {
                        ...table,
                        status: "occupied",
                    }
                    : table
            )
        );
    };

    const completeOrder = (id) => {

        setOrders((prev) =>
            prev.filter((order) => order.id !== id)
        );

    };

    return (
        <RestaurantContext.Provider
            value={{
                orders,
                setOrders,
                tables,
                setTables,
                createOrder,
                completeOrder,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
}

export function useRestaurant() {
    return useContext(RestaurantContext);
}
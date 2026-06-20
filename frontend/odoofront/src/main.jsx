import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { RestaurantProvider } from "./context/RestaurantContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </BrowserRouter>
);
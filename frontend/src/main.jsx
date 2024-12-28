import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

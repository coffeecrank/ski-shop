import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import AboutPage from "./features/about/AboutPage.tsx";
import Catalog from "./features/catalog/Catalog.tsx";
import ProductDetails from "./features/catalog/ProductDetails.tsx";
import ContactPage from "./features/contact/ContactPage.tsx";
import HomePage from "./features/home/HomePage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

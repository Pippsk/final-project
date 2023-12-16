import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./Pages/Auth/AuthContext";
import Home from "./Pages/Home/Home";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";

import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile";

import "react-toastify/dist/ReactToastify.min.css";
import { ProductsProvider } from "./Context/ProductsContext";

import CartPage from "./Pages/CartPage/CartPage";
import ProductsLayout from "./Layouts/ProductsLayout.jsx/ProductsLayout";
import { CartProvider } from "./Context/CartContext";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import NewProduct from "./Pages/NewProduct/NewProduct";

function App() {
  return (
    <AuthContextProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<ProductsLayout />}>
                  <Route index element={<Products />} />
                </Route>
                <Route path="products/:id" element={<ProductDetails />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Auth />} />
                <Route path="register" element={<Auth />} />
                <Route path="profile" element={<Profile />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="newproduct" element={<NewProduct />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
              theme="light"
            />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </AuthContextProvider>
  );
}

export default App;

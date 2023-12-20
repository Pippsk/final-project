import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../Reducers/ProductsReducer";
import { productsUrl } from "../Utils/constants";
import { useAuthContext } from "../Pages/Auth/AuthContext";

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accessToken, user } = useAuthContext();

  const getProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_START" });

    try {
      const products = await fetch(url, {
        headers: {
          "Content-type": "aplication/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json());

      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(productsUrl);
  }, []);

  const getSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_START" });
    try {
      const singleProduct = await fetch(url).then((res) => res.json());

      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getProducts(productsUrl);
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, getSingleProduct, getProducts, deleteItem }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../Reducers/ProductsReducer";
import { productsUrl } from "../Utils/constants";

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

  const getProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_START" });

    try {
      const products = await fetch(url).then((res) => res.json());

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
      console.log(singleProduct);
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  return (
    <ProductsContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

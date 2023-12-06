const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return { ...state, productsLoading: true };

    case "GET_PRODUCTS_SUCCESS":
      return { ...state, productsLoading: false, products: action.payload };

    case "GET_PRODUCTS_ERROR":
      return { ...state, productsError: true };

    case "GET_SINGLE_PRODUCT_START":
      return { ...state, singleProductLoading: true };

    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };

    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };

    default:
      return state;
  }
};

export default ProductsReducer;

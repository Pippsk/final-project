import React, { useEffect, useState } from "react";
import { productsUrl } from "../../Utils/constants";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductsContext";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    getSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    getSingleProduct(`${productsUrl}${id}`);
  }, [id]);

  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.description}</p>
    </div>
  );
};

export default SingleProduct;

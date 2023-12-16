import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

import { useAuthContext } from "../Auth/AuthContext";

import styles from "./NewProduct.module.css";

const productSchema = object({
  name: string().required("Please enter the name of the product"),
  price: number("Please enter a valid number")
    .typeError("Please enter a number")
    .positive("Please enter a positive number")
    .integer()
    .required("Please enter the price for the product"),
  stock: number("Please enter a valid number")
    .typeError("Please enter a number")
    .positive("Please enter a positive number")
    .integer("Please enter the stock for the product")
    .required("Please enter the stock for the product"),
  image: string().url().required("Please enter the image url for the product"),
  company: string().required("Please enter the company name"),
  description: string().required(
    "Please enter the description for the product"
  ),
  category: string().required("Please enter the category of the product"),
});

const NewProduct = () => {
  const { accessToken } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const profileForm = async (values) => {
    const data = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    return data;
  };
  return (
    <div className={styles.profile_container}>
      <form onSubmit={handleSubmit(profileForm)}>
        <div>
          <h1>Add a Product</h1>
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <p className={styles.error_message}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="price">Product Price</label>
          <input type="number" id="price" {...register("price")} />
          {errors.price && (
            <p className={styles.error_message}>{errors.price.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="stock">Product Stock</label>
          <input type="number" id="stock" {...register("stock")} />
          {errors.stock && (
            <p className={styles.error_message}>{errors.stock.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="image">Product Image</label>
          <input type="url" id="image" {...register("image")} />
          {errors.image && (
            <p className={styles.error_message}>{errors.image.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="company">Product Company</label>
          <input type="text" id="company" {...register("company")} />
          {errors.company && (
            <p className={styles.error_message}>{errors.company.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="description">Product Description</label>
          <textarea
            type="text"
            rows="12"
            cols="35"
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <p className={styles.error_message}>{errors.description.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="category">Product Category</label>
          <input type="text" id="category" {...register("category")} />
          {errors.category && (
            <p className={styles.error_message}>{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className={styles.add_product}>
          Add product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;

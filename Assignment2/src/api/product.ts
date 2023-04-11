import axios from "axios";
import instance from ".";
import { ProductForm } from "../models";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: string) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};

export const addProduct = (data: ProductForm) => {
  const uri = "/products";
  return instance.post(uri, data);
};

export const editProduct = (id: string, data: ProductForm) => {
  const uri = "/products/" + id;
  return instance.put(uri, data);
};

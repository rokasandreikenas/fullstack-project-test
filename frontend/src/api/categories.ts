import { Category, NewCategory } from "../types/categories";
import axiosInstance from "./axiosInstance";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};

export const createCategory = async (
  category: NewCategory
): Promise<Category> => {
  const response = await axiosInstance.post("/categories", category);
  return response.data;
};

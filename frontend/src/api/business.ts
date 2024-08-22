import axiosInstance from "./axiosInstance";
import { Business, NewBusiness } from "../types/business";

export const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axiosInstance.get("/businesses");
  return response.data;
};

export const createBusiness = async (
  business: NewBusiness
): Promise<Business> => {
  const response = await axiosInstance.post("/businesses", business);
  return response.data;
};

import { UserRequest, UserResponse } from "@/types/user";
import axiosInstance from "./axiosInstance";

export const loginUser = async (user: UserRequest): Promise<UserResponse> => {
  const response = await axiosInstance.post("/auth/login", user);
  return response.data;
};

import { GetUsers, UpdateUser, User } from "@/interfaces/users";
import axiosClient from "./apiClient";
import { off } from "process";

const userService = {
  getUser: async (id: string) => {
    const response = await axiosClient.get(`/profile/${id}`);
    return response;
  },
  getUsers: async (offset: number): Promise<GetUsers> => {
    try {
      const response = await axiosClient.get("/users", { params: { offset } });
      return response.data;
    } catch (error: any) {
      console.error(error?.message);
      throw error;
    }
  },
  getSearchUsers: async (
    name: string,
    email: string,
    offset: number
  ): Promise<GetUsers> => {
    try {
      const response = await axiosClient.get<GetUsers>("/search", {
        params: { offset, name, email },
      });
      return response.data;
    } catch (error: any) {
      console.error(error?.message);
      throw error;
    }
  },
  updateUser: async (id: string, user: UpdateUser) => {
    const response = await axiosClient.post(`/update/${id}`, user);
    return response;
  },
  deleteUser: async (id: string) => {
    const response = await axiosClient.post(`/delete/${id}`, id);
    return response;
  },
  deleteUsers: async (ids: number[]) => {
    const response = await axiosClient.post(`/delete-many/${ids}`, ids);
    return response;
  },
};

export default userService;

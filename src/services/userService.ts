import axiosClient from "./apiClient";

const userService = {
  getUser: async (id: string) => {
    const response = await axiosClient.get(`/profile/${id}`);
  },
  getUsers: async () => {
    const response = await axiosClient.get("/users");
  },
  getSearchUsers: async (query: string, pagination: number) => {
    const response = await axiosClient.get("/search", {
      params: { query, offset: pagination },
    });
  },
  updateUser: async (id: string, user: User) => {
    const response = await axiosClient.post(`/update/${id}`, user);
  },
  deleteUser: async (id: string) => {
    const response = await axiosClient.post(`/delete/${id}`, id);
  },
  deleteUsers: async (ids: number[]) => {
    const response = await axiosClient.post(`/delete-many/${ids}`, ids);
  },
};

export default userService;

import axios from "axios";
import type {User}  from "../types/Users";

const API_URL = "https://react-crud-json-server-q44v.onrender.com/users";

export const getUsers = () => axios.get<User[]>(API_URL);

export const createUser = (data: User) =>
  axios.post(API_URL, data);

export const updateUser = (id: number, data: User) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteUser = (id: number) =>
  axios.delete(`${API_URL}/${id}`);

import { Pagination } from "./pagination";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: string;
  photo_url: string;
  status: UserStatus;
}

export interface UpdateUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface GetUsers extends Pagination {
  users: User[];
}

export enum UserStatus {
  Adimplente = "0",
  Inadimplente = "1",
}

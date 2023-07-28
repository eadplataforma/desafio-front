export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: string;
  photo_url: string;
  status: UserStatus;
}

export interface GetUsers {
  total: number;
  limit: number;
  offset: number;
  rows: number;
  users: User[];
}

export enum UserStatus {
  Adimplente = 0,
  Inadimplente = 1,
}

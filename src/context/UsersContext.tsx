"use client";
import { Pagination } from "@/interfaces/pagination";
import { User } from "@/interfaces/users";
import userService from "@/services/userService";
import React, { createContext, useEffect, useState } from "react";

interface IContext {
  users: User[];
  setUsers: (value: User[]) => void;
  paginatedUsers: User[];
  setPaginatedUsers: (value: User[]) => void;
  pagination: Pagination;
  currentUser: User | null;
  fetchUsers: (value?: number) => void;
  fetchPage: (newPage: number) => void;
}

export const DataContext = createContext<IContext>({
  users: [],
  paginatedUsers: [],
  pagination: { total: 0, limit: 10, offset: 0, rows: 60 },
  currentUser: null,
  fetchUsers: () => {},
  fetchPage: () => {},
  setUsers: () => {},
  setPaginatedUsers: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    total: 0,
    limit: 10,
    rows: 60,
  });

  useEffect(() => {
    if (users.length > 0) {
      console.log(users[0]);
      setCurrentUser(users[0]);
    }
  }, [users]);

  const fetchPage = async (newPage: number) => {
    if (users.length < newPage * pagination.limit - (pagination.limit - 1)) {
      const { offset, limit, total, rows, users } = await userService.getUsers(
        newPage * pagination.limit - pagination.limit
      );
      setPagination({ offset, limit, total, rows });
      addUsersWithoutDuplications(users);
      if (!currentUser && users.length > 0) {
        setCurrentUser(users[0]);
      }
      setPaginatedUsers(users);
    } else {
      setPaginatedUsers(
        users.slice(
          newPage * pagination.limit - pagination.limit,
          newPage * pagination.limit
        )
      );
    }
  };

  const addUsersWithoutDuplications = (newUsers: User[]) => {
    const filteredNewUsers = newUsers.filter((newUser) => {
      return !users.some((existingUser) => existingUser.id === newUser.id);
    });
    setUsers((oldState) => oldState.concat(filteredNewUsers));
  };

  const fetchUsers = async (newOffset?: number) => {
    const { offset, limit, total, rows, users } = await userService.getUsers(
      newOffset ? newOffset : 0
    );
    setPagination({ offset, limit, total, rows });
    addUsersWithoutDuplications(users);
    if (!currentUser && users.length > 0) {
      setCurrentUser(users[0]);
    }
  };

  const searchUsers = async (searchText: string) => {
    const res = await userService.getSearchUsers(
      searchText,
      searchText,
      pagination.offset
    );
    if (typeof res !== "string") {
      const { offset, limit, total, rows } = res;
      setPagination({ offset, limit, total, rows });
      addUsersWithoutDuplications(users);
    }
  };

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        pagination,
        setPaginatedUsers,
        currentUser,
        fetchUsers,
        paginatedUsers,
        fetchPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

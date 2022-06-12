import { fireRequest } from "./axios";

export const getMessages = () =>
  fireRequest({
    payload: {},
    method: "get",
    params: `/messages`,
  });
export const postMessage = (payload) =>
  fireRequest({
    payload,
    method: "post",
    params: `/messages`,
  });
export const login = (payload) =>
  fireRequest({
    payload,
    method: "post",
    params: "/sessions",
  });
export const isLoggedin = (payload) =>
  fireRequest({
    payload,
    method: "get",
    params: "/sessions",
  });
export const logout = () =>
  fireRequest({
    method: "delete",
    params: "/sessions",
  });

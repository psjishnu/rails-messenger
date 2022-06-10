import { fireRequest } from "./axios";

export const getMessages = () =>
  fireRequest({
    payload: {},
    method: "get",
    params: `/messages`,
  });

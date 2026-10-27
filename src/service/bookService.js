import request from "../utils/request";

export const createBook = async (bookData) => {
  return request({ path: "/books", method: "POST", data: bookData });
};

export const editBook = async (bookId, payload) => {
  return request({
    path: `/books?id=eq.${bookId}`,
    method: "PUT",
    data: payload
  });
};

export const deleteBook = async (bookId, payload) => {
  return request({
    path: `/books?id=eq.${bookId}`,
    method: "DELETE",
    data: payload
  });
};

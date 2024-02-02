import { getLocalStorage } from "./encrypted-storage";

export const getAuthHeader = () => {
  // Bu kısımda gerçek token alma mekanizması eklenecek 
  const token = getLocalStorage("token");

  let header = {};

  if (token) {
    header = {
      Authorization: `Bearer ${token}`, // Token tipine göre Bearer ya da başka bir prefix eklenecek
    };
  }

  return header;
};

import { INCREASE, DECREASE, REMOVE, CHANGE, ADD } from "./productTypes";

export const increaseProduct = (id) => {
  return { type: INCREASE, payload: 1, id };
};

export const decreaseProduct = (id) => {
  return { type: DECREASE, payload: 1, id };
};

export const removeProduct = (id) => {
  return { type: REMOVE, id };
};

export const changeProduct = (id, values) => {
  return { type: CHANGE, id, values };
};

export const addProduct = (values) => {
  return { type: ADD, values };
};

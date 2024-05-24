export const isValidQuantity = (quantity: string | undefined): boolean => {
  return quantity === undefined || (!isNaN(Number(quantity)) && +quantity > 0);
};

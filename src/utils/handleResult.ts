import { isValidQuantity } from "./isValidQuantity";
import { getTotalPrice } from "./getTotalPrice";

export const handleResult = async (
  symbol: string,
  quantity: any
): Promise<string> => {
  if (isValidQuantity(quantity)) {
    const p = await getTotalPrice(symbol, quantity);
    return `The total amount is ${p}`;
  } else {
    return "The input for the amount is incorrect";
  }
};

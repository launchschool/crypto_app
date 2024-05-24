import { isValidQuantity } from "./isValidQuantity";
import { getTotalPrice } from "./getTotalPrice";

export const handleResult = async (
  symbol: string,
  quantity: any
): Promise<string> => {
  if (!isValidQuantity(quantity)) {
    return "The input for the amount is incorrect";
  }
  try {
    const price = await getTotalPrice(symbol, quantity);
    return `The total amount is $${price}`;
  } catch (error: unknown) {
    let errorMessage = "An error occurred while fetching the total price.";
    if (error instanceof Error) {
      console.error("Error fetching total price:", error.message);
    }
    return errorMessage;
  }
};

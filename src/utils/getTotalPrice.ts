import { fetchRate } from "../services/fetchRate";

export const getTotalPrice = async (
  symbol: string = "BTC",
  quantity: number = 1
): Promise<string> => {
  try {
    const { data } = await fetchRate(symbol);
    return `The total amount is ${
      Math.round(data.rate * quantity * 100) / 100
    }`;
  } catch (err: any) {
    return err.data.error;
  }
};

import { fetchRate } from "../services/fetchRate";

export const getTotalPrice = async (
  symbol: string = "BTC",
  quantity: number = 1
): Promise<number> => {
  try {
    const { data } = await fetchRate(symbol);
    return Math.round(data.rate * quantity * 100) / 100;
  } catch (err: any) {
    return err.data.error;
  }
};

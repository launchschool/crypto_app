import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.API_KEY;

const headers = {
  headers: { "X-CoinAPI-Key": api_key },
};

export interface FetchRateResponseData {
  rate: number;
}

export const fetchRate = async (
  symbol: string = "BTC"
): Promise<FetchRateResponseData> => {
  try {
    const response = await axios.get(
      `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
      headers
    );

    return response.data;
  } catch (e: unknown) {
    throw new Error("An unexpected error occurred");
  }
};

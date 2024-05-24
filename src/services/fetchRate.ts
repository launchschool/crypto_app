import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.API_KEY;

const headers = {
  headers: { "X-CoinAPI-Key": api_key },
};

export interface FetchRateResponse {
  rate: number;
}

export const fetchRate = async (symbol: string = "BTC") => {
  try {
    const response = await axios.get<FetchRateResponse>(
      `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
      headers
    );
    return response;
  } catch (e: any) {
    throw e.response;
  }
};

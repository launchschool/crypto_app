import { handleResult } from "./utils/handleResult";

let symbol = process.argv[2];
let quantity = process.argv[3];

(async () => {
  try {
    const result = await handleResult(symbol, quantity);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
})();

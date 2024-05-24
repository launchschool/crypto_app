import { handleResult } from "./utils/handleResult";

let symbol = process.argv[2];
let quantity = process.argv[3];

(async () => {
  try {
    const result = await handleResult(symbol, quantity);
    console.log(`The total amount is $${result}`);
  } catch (error) {
    console.error("Error:", error);
  }
})();

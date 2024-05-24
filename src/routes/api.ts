// An example route.

import express, { Request, Response } from "express";
const router = express.Router();
import { getUsers } from "../services/users";

router.get("/", async (req: Request, res: Response) => {
  const data = await getUsers();
  res.json(data);
});

export default router;

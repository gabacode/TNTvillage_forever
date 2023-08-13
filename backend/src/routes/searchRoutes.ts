import { Router } from "express";
import Record from "../models/recordModel";

const router = Router();

router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.q as string;
    const results = await Record.find({
      $text: { $search: searchQuery },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;


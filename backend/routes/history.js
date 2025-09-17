import express from "express";
import { RequestLog } from "../entities/RequestLog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const em = req.orm.em.fork();
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const [logs, total] = await em.findAndCount(RequestLog, {}, {
    limit,
    offset: (page - 1) * limit,
    orderBy: { createdAt: -1 },
  });

  res.json({ logs, total, page, limit });
});

export default router;

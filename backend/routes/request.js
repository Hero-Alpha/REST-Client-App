import express from "express";
import axios from "axios";
import { RequestLog } from "../entities/RequestLog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const em = req.orm.em.fork();
    const { method, url, headers, body } = req.body;

    const response = await axios({ method, url, headers, data: body });

    const log = em.create(RequestLog, {
      method,
      url,
      headers,
      body,
      response: response.data,
      createdAt: new Date(),
    });

    await em.persistAndFlush(log);

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

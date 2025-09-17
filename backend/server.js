import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config.js";
import requestRoutes from "./routes/request.js";
import historyRoutes from "./routes/history.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

let orm;

function mikroOrmMiddleware(req, res, next) {
  RequestContext.create(orm.em, () => {
    req.orm = orm;
    next();
  });
}

async function start() {
  orm = await MikroORM.init(mikroConfig);

  app.use(mikroOrmMiddleware);
  app.use("/api/request", requestRoutes);
  app.use("/api/history", historyRoutes);

  app.listen(PORT, () => console.log(`Backend running on PORT: ${PORT}`));
}

start().catch((err) => console.error(err));

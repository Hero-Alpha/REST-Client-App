import dotenv from "dotenv";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";
import { TestEntity } from "./entities/TestEntity.js";
import { RequestLog } from "./entities/RequestLog.js";
import { MongoDriver } from "@mikro-orm/mongodb";

dotenv.config();

export default {
  driver: MongoDriver,
  clientUrl: process.env.MONGO_URL,
  dbName: "rest-client",
  entities: [TestEntity, RequestLog],
  highlighter: new MongoHighlighter(),
  debug: true,
};

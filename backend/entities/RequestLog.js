import { EntitySchema } from "@mikro-orm/core";

export const RequestLog = new EntitySchema({
  name: "RequestLog",
  collection: "requestlogs",
  properties: {
    _id: { type: "ObjectId", primary: true },
    method: { type: "string" },
    url: { type: "string" },
    headers: { type: "json", nullable: true },
    body: { type: "json", nullable: true },
    response: { type: "json", nullable: true },
    createdAt: { type: "Date", onCreate: () => new Date() },
  },
});

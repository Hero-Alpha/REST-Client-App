import { EntitySchema } from "@mikro-orm/core";

export const TestEntity = new EntitySchema({
  name: "TestEntity",
  collection: "test-entity", // Mongo collection name
  properties: {
    _id: { type: "ObjectId", primary: true },
    message: { type: "string" },
  },
});

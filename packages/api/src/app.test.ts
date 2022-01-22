import request = require("supertest");
import app from "./app";

test("test example", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello World 2!");
});

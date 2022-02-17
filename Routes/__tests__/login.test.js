const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

test("/GET /login", async () => {
  const response = await request.get("/login");
  expect(response.status).toBe(200);
});

const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

test("/GET /signup", async () => {
  const response = await request.get("/signup");
  expect(response.status).toBe(200);
});

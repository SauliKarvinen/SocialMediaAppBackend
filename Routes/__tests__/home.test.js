const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

describe("Tests for endpoint /home", () => {
  test("/GET /home", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});

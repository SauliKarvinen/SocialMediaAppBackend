const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

describe("Tests for endpoint /profile", () => {
  test("User shouldn't be able to access page without logging in", async () => {
    const response = await request.get("/profile");
    expect(response.status).toBe(403);
  });
});

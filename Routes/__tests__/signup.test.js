const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

describe("Tests for endpoint /signup", () => {
  test("/GET /signup", async () => {
    const response = await request.get("/signup");
    expect(response.status).toBe(200);
  });

  test("Signup fails with empty fields", async () => {
    const user = {
      email: "",
      password: "",
    };

    const result = await request.post("/signup").send(user);

    expect(result.status).toBe(400);
  });

  test("Signup succesful with correct input data", async () => {
    const user = {
      email: "username",
      password: "password",
    };

    const result = await request.post("/signup").send(user);

    expect(result.status).toBe(200);
  });
});

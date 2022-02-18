const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

describe("Tests for endpoint /login", () => {
  test("/GET /login status is 200", async () => {
    const response = await request.get("/login");
    expect(response.status).toBe(200);
  });

  test("Login failed with wrong credentials", async () => {
    const user = {
      username: "tester",
      password: "wrongpassword",
    };

    const response = await request.post("/login").send(user);

    expect(response.status).toBe(403);
  });

  test("Login succesful with right credentials", async () => {
    const user = {
      username: "tester",
      password: "password",
    };

    const response = await request.post("/login").send(user);

    expect(response.status).toBe(200);
  });

  test("Successful login returns token", async () => {
    const user = {
      username: "tester",
      password: "password",
    };

    const response = await request.post("/login").send(user);

    expect(response.token).not.toBeUndefined();
  });
});

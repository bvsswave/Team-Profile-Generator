const Engineer = require("../lib/Engineer");
test("get github", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Alex", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Alex", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
test("gets github", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Alex", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

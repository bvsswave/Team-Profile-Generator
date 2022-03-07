const Intern = require("../lib/Intern");
test("gets school", () => {
  const testValue = "SUU";
  const e = new Intern("Alex", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alex", 1, "test@test.com", "SUU");
  expect(e.getRole()).toBe(testValue);
});
test("gets school", () => {
  const testValue = "SUU";
  const e = new Intern("Alex", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

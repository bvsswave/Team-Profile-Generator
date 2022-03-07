const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
test("office number", () => {
  const testValue = 100;
  const e = new Manager("Alex", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Alex", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
test("gets office number", () => {
  const testValue = 100;
  const e = new Manager("Alex", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

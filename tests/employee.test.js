const Employee = require("../lib/Employee");
test("employee test", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
test("can set name", () => {
  const name = "Patricia";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("can set id", () => {
  const testValue = 100;
  const e = new Employee("Alex", testValue);
  expect(e.id).toBe(testValue);
});
test("can get email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Alex", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("can get name", () => {
  const testValue = "Alex";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
test("can get id", () => {
  const testValue = 100;
  const e = new Employee("Alex", testValue);
  expect(e.getId()).toBe(testValue);
});
test("can get email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Alex", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"employee\"", () => {
  const testValue = "employee";
  const e = new Employee("Alex", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

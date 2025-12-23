import { fetchAPI, submitAPI } from "./api";

test("fetchAPI returns a non-empty array", () => {
  const result = fetchAPI(new Date());

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("submitAPI returns true", () => {
  const formData = {
    name: "Test User",
    date: "2025-01-01",
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  };

  const result = submitAPI(formData);

  expect(result).toBe(true);
});

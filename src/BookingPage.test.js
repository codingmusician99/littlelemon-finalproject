jest.mock(
  "react-router-dom",
  () => ({
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

import {initializeTimes, updateTimes} from "./BookingPage";
import { fetchAPI } from "./api";

jest.mock("./api");

test("initializeTimes returns non-empty array", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00"]);

    const result = initializeTimes();

    expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns new times when date changes", () => {
    fetchAPI.mockReturnValue(["18:00", "19:00"]);

    const state = [];
    const action = {
        type: "dateChange",
        date: "2025-01-01"
    };

    const result = updateTimes(state, action);

    expect(result).toEqual(["18:00", "19:00"])
});
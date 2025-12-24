import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const renderForm = () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00", "20:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
};

describe("BookingForm HTML5 validation", () => {
  test("name input is required", () => {
    renderForm();
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeRequired();
  });

  test("date input is required and type date", () => {
    renderForm();
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("time select is required", () => {
    renderForm();
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has min and max attributes", () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

describe("BookingForm JavaScript validation", () => {
  test("submit button is disabled when form is empty", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: /reserve/i });
    expect(submitButton).toBeDisabled();
  });

  test("submit button enables when form is valid", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Shradha" },
    });

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });

    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });

    fireEvent.change(screen.getByLabelText(/occassion/i), {
        target: {value: "Birthday"},
    });

    const submitButton = screen.getByRole("button", { name: /reserve/i });
    expect(submitButton).not.toBeDisabled();
  });

  test("submit button stays disabled when guests exceed maximum", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Shradha" },
    });

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });

    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "12" },
    });

    fireEvent.change(screen.getByLabelText(/occassion/i), {
      target: { value: "Birthday" },
    });

    const submitButton = screen.getByRole("button", { name: /reserve/i });
    expect(submitButton).toBeDisabled();
  });
});

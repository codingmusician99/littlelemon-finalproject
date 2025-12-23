import { fetchAPI, submitAPI } from "./api";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    if (action.type === "dateChange") {
        return fetchAPI(new Date(action.date));
    }
    return state;
};

function BookingPage() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );
}

export default BookingPage;


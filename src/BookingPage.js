import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const updateTimes = (state, action) => {
    return state;
};

export default function BookingPage() {
    const [bookings, setBookings] = useState([]);

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
    <BookingForm bookings={bookings} setBookings={setBookings} availableTimes={availableTimes} dispatch={dispatch}/>
    );
}


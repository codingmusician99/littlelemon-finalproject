import { useState } from "react";

export default function BookingForm({bookings, setBookings, availableTimes, dispatch, submitForm}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");

    const isFormValid =
        date &&
        time &&
        guests >= 1 &&
        guests <= 10 &&
        occassion;

    const handleSubmit = (e) => {
        e.preventDefault();

        submitForm({
            name,
            date,
            time,
            guests,
            occassion,
        });
    };

    return (
        <section className="booking-section">
            <form onSubmit={handleSubmit} className="bookingForm">
            <h2 className="booking-title">Reserve a Table</h2>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="date">Date:</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => {setDate(e.target.value); dispatch({type: "dateChange", date: e.target.value,});}}
                required
            />

            <label htmlFor="time">Time:</label>
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select Time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests:</label>
            <input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occassion">Occassion:</label>
            <select
                id="occassion"
                value={occassion}
                onChange={(e) => setOccassion(e.target.value)}
            >
                <option value="">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" disabled={!isFormValid}>Reserve</button>

            </form>
        </section>
    );
}


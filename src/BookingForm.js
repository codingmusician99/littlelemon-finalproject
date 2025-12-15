import { useState } from "react";

export default function BookingForm({bookings, setBookings, availableTimes, dispatch}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBooking = {
            name,
            date,
            time,
            guests,
            occassion,
        };

        setBookings([...bookings, newBooking]);
        alert("Table Reserved Successfully!");
    }

    return (
        <section className="booking-section">
            <form onSubmit={handleSubmit} className="bookingForm">
            <h2 className="booking-title">Reserve a Table</h2>
            <label>Name:</label>
            <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Date:</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => {setDate(e.target.value); dispatch({date: e.target.value});}}
                required
            />

            <label>Time:</label>
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select Time</option>
                {availableTimes.map((t) => (
                    <option key={t}>{t}</option>
                ))}
            </select>

            <label>Number of guests:</label>
            <input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <label>Occassion:</label>
            <select
                id="occassion"
                value={occassion}
                onChange={(e) => setOccassion(e.target.value)}
            >
                <option value="">None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Reserve</button>

            </form>
        </section>
    )
}


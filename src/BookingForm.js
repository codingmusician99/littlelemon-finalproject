import { useState } from "react";

export default function BookingForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", { name, date, time, guests, occassion});
        alert("Table Reserved Successfully!");
    }

    return (
        <form onSubmit={handleSubmit} className="bookingForm">
            <h2>Reserve a Table</h2>
            <lable>Name:</lable>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label>Time:</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select Time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
            </select>

            <label>Number of guests:</label>
            <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <label>Occassion:</label>
            <select
                value={occassion}
                onChange={(e) => setOccassion(e.target.value)}
            >
                <option value="">None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Reserve</button>

        </form>
    )
}


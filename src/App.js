import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { useState } from 'react';
import Header from './Header';
import BookingPage from './BookingPage';
//import BookingForm from './BookingForm';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
 // const [bookings, setBookings] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

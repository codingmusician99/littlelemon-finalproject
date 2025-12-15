import './App.css';
//import { useState } from 'react';
import Header from './Header';
import BookingPage from './BookingPage';
//import BookingForm from './BookingForm';
import Footer from './Footer';

function App() {
 // const [bookings, setBookings] = useState([]);
  return (
    <>
      <Header />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;

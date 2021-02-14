import React, { useEffect, useState } from 'react'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/bookings")
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <div>
            <h3>You have: {bookings.length} bookings</h3>
            {
                bookings.map(booking => (
                    <div>
                        <h3>{booking.name}</h3>
                        <p>Bookings Details: from:{booking.checkIn} to: {booking.checkOut}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Bookings

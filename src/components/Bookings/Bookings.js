import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch("http://localhost:4000/bookings?email=" + loggedInUser.email, {
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${sessionStorage.getItem("token")}`
          },
        })
          .then((res) => res.json())
          .then((data) => setBookings(data));
    }, [])
    console.log(bookings);
    return (
      <div>
        <h3>You have: {bookings.length} bookings</h3>
        {bookings.map((booking) => (
          <div key={booking._id}>
            <h3>{booking.name}</h3>
            <p>
              Bookings Details: from:
              {new Date(booking.checkIn).toDateString("dd/mm/yyyy")} to:
              {new Date(booking.checkOut).toDateString("dd/mm/yyyy")}
            </p>
          </div>
        ))}
      </div>
    );
}

export default Bookings

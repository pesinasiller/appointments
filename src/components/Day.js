import React, { useEffect, useState } from 'react';
import TimeSpan from './TimeSpan';

const response = {
  "appointments":[
    {
      "date": "2020-18-10 12:00hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 12:30hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 13:00hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 13:30hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 14:00hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 14:30hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 15:00hrs",
      "state": "free"
    },
    {
      "date": "2020-18-10 15:30hrs",
      "state": "free"
    },
  ]
};

const initialApointments = response.appointments;

function Day(props) {
  const [appointments, setAppointments] = useState(initialApointments);
  
  const setBooked = (appointmentDate) => {
    const updatingAppointment = {
      "date": appointmentDate,
      "state": "updating"
    };
    const updatedItems = appointments.map(el => el.date === appointmentDate ? updatingAppointment : el)
    setAppointments(updatedItems);

    /*
    fetch('/v1/appointments/bookId', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: appointmentDate
      })
    })
    .then(()=> getAppointments())
    .then((data) => setAppointments(data));
    */

    //mock de la llamada
      setTimeout(()=>{
        const bookedAppointment = {
          "date": appointmentDate,
          "state": "booked"
        };
        const updatedItems = appointments.map(el => el.date === appointmentDate ? bookedAppointment : el)
        setAppointments(updatedItems);
      },1000)

  }

  const getAppointments = () =>
    fetch(`/v1/appointments/`)
      .then((res) => res.json())

  useEffect(() => {
       getAppointments().then((data) => setAppointments(data));
   }, []);

  const timeSpans = appointments.map((appointment)=> {
    return <TimeSpan
            setBooked={setBooked}
            date={appointment.date}
            state={appointment.state} />
    }
  )

  return (
    <div className={``}>
      {timeSpans}
    </div>
  )
}

export default Day;

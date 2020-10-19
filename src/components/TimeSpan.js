import React from 'react';

function TimeSpan(props) {

  const setAppointment = (date) => {
    if(props.state==='booked'||props.state==='updating') return;
    props.setBooked(date);
  }

  return (
    <div
      className={`time-span ${props.state === 'booked'?'time-span__booked':''}`}
      onClick={() => setAppointment(props.date)}
      >
      {`${props.date} ${props.state}`}

    </div>
  )
}

export default TimeSpan;

import React from 'react'
import './Footer.css';

function Footer() {
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


  const date = new Date()
  return (
    <footer>
      <p>copyright {formatDate(date)}</p>
    </footer>
  )
}

export default Footer

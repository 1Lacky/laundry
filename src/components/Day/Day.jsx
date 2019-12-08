import React from 'react';
import './Day.css'
const formatter1 = new Intl.DateTimeFormat("ru", {
  weekday: "short",
});
const formatter2 = new Intl.DateTimeFormat("ru", {
  day: "numeric"
});

function Day({date}) {
  return (
    <div className="day">
        <p className="title">{formatter1.format(date)}</p>
        <p className="title-number">{formatter2.format(date)}</p>
    </div>
  );
}

export default Day;

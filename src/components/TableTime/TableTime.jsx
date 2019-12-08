import React from 'react';
import './TableTime.css';

let clock=['14:00', '16:00', '18:00','20:00','22:00'];

function TableTime({data}) {
  return (
    <aside className="table-time">
        <div className="beautiful-border"></div>
        <ul className="table-clock">
            {clock.map((item, i)=>
                <li className={(i !== 0)?"table-clock__item":"table-clock__item"}
                    key={`TableClock-${i}`}>
                    {item}
                </li>)}
        </ul>
    </aside>
  );
}

export default TableTime;

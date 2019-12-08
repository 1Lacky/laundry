import React from 'react';
import Day from '../Day/Day';
import TimeButton from '../TimeButton/TimeButton';
import './TableСolumn.css';


function TableСolumn({dataDay, handleClickDay}) {
  return (
    <div className="TableRow">
        <Day date={dataDay.date}/>
        <ul className="TableMesh">
            {dataDay.times.map((item, i)=>
                <li className="TableCell" key={`TableCell-${i}`}>
                    {(item.free !== 0)
                        ?<TimeButton handleClickDay={handleClickDay} dateTimes={item}/>
                        :null}
                </li>
            )}
        </ul>
    </div>
  );
}

export default TableСolumn;

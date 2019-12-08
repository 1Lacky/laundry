import React from 'react';
import './TimeButton.css'
let backgroundColor="";
function TimeButton({dateTimes, handleClickDay}) {

    if(dateTimes.free===1)
        backgroundColor="rgb(213, 0, 0)";
    else if(dateTimes.free===2)
        backgroundColor="rgb(246, 191, 38)";
    else if(dateTimes.free===3)
        backgroundColor="rgb(3, 155, 229)";
    else backgroundColor="rgb(11, 128, 67)";
 let divStyle = {backgroundColor};

  return (
    <div style={divStyle}
        className="TimeButton"
        onClick={()=>handleClickDay(dateTimes.id)}>
        Осталось: {dateTimes.free}
    </div>
  );
}

export default TimeButton;

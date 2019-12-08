import React, { useState } from 'react';
import './Booking.css';

function Booking({numbers,handleSubmit}) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [count, setCount] = useState(null);
    function handleInputChange(event){
        if(event.target.name==="name")
            setName(event.target.value);
        else
            setRoom(event.target.value);
    }
    function handleClick(item) {
        setCount(item);
    }

    function handleButton() {
        if(name==="" || room==="" || count===null)
            alert("Не все поля заполнены")
        else{
            alert(`${name} из комнаты № ${room} забронировал ${count} стиральные машинки`);
            handleSubmit(count)
            setName("");
            setRoom("");
            setCount(null);
        }

    }
    return (
      <div className="bookingBlock">

         <form action="" className="ui-form">
            <h3>Запись в прачку</h3>
            <div className="form-row">
                <input onChange={handleInputChange} name="name" type="text" id="name" required autoComplete="off" value={name}/>
                <label htmlFor="name">Имя и Фамилия</label>
            </div>
            <div className="form-row Bottom">
                <input onChange={handleInputChange} name="room" type="text" id="room" required autoComplete="off"  value={room}/>
                <label htmlFor="room">Номер комнаты</label>
            </div>
            <div className="blockWash">
                <p className="left">Количество машинок</p>
                <ul className="listWash">
                    {numbers.map((item, i)=>
                        <li
                        className={count===item?"itemWash itemWash-active":"itemWash"}
                        key={`itemWash-${i}`}
                        onClick={()=>handleClick(item)}>
                                {item}
                        </li>)}
                </ul>
            </div>
            <div  className="submitBtn" onClick={()=>handleButton()}>
                Забронировать
            </div>
        </form>
      </div>
    );
}

export default Booking;

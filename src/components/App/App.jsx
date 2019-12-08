import React, { useState } from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Booking from '../Booking/Booking'

function App({data}) {
    const [store, setStore] = useState(data);
    const [activeDay, setActiveDay] = useState();
    const [allCount, setAllCount] = useState([1, 2, 3, 4]);
    function handleSubmit(item){
        //item1.
        const newStore = store.map( ({date, times}) => {
            let tempArr=times.map((temp)=>(temp.id===activeDay)?{id:temp.id, free:temp.free-item}:{id:temp.id, free:temp.free});
            return {date, times:tempArr}
        });
        setStore(newStore);
        console.log(newStore);
    }
    function handleClickDay(item){
        let tempCount=0;
        store.map((item1)=> item1.times.map((temp)=>(temp.id===item)?tempCount=temp.free:null))
        let numbers=[];
        for(let i=1;i<=tempCount;i++)
            numbers.push(i);
        setAllCount(numbers);
        setActiveDay(item);
    }
  return (
    <div className="app">
        <Header/>
        <Main data={store}  handleClickDay={handleClickDay}/>
        <Booking numbers={allCount} handleSubmit={handleSubmit}/>
        <Footer/>
    </div>
  );
}

export default App;

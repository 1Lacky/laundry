import React from 'react';
import TableColumn from '../TableСolumn/TableСolumn';
import TableTime from '../TableTime/TableTime';
import './Main.css';

function Main({data, handleClickDay}) {
  return (
        <main className="main">
            <div className="container">
                <TableTime/>
                <div className="content">
                    {data.map((item, i) =>{
                        let sum=0;
                        item.times.map((day)=>sum+=day.free)
                        return (sum!==0)
                        ?<TableColumn
                            dataDay={item}
                            handleClickDay={handleClickDay}
                            key={`TableСolumn-${i}`} />
                        :null
                    })}
                </div>
            </div>

        </main>
  );
}

export default Main;

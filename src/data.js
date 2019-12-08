let now = new Date();
let count =0;
const data=[];

function GetNumber(){
    return Math.floor(Math.random() * (4 + 1)) + 0;
}

function GetTimes(day, i){
    if(i===0)
        if(day===6)
            return {id:count++, free:GetNumber()};
        else
            return {id:count++, free:0};
    return {id:count++, free:GetNumber()};
}

for(let i=0;i<14;i++)
{
  let span = new Date(now.setDate(now.getDate() + 1));
  if(span.getDay() === 0 || span.getDay() === 3 ) continue;
  let arr = [];
  for(let i=0;i<5;i++)
    arr.push(GetTimes(span.getDay(), i));
  data.push(
  {
    date:  span,
    times:arr
  });
}

export default data;

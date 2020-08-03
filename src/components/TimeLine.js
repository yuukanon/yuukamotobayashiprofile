import React from 'react';


const TimeLine = ({Icon,Year, Company, Title, Location, Summary, Type}) => {
  return (
   <div>
      <img src={Icon}/>
      <p>{Year}</p>
      <p>{Company}</p>
      <p>{Title}</p>
      <p>{Location}</p>
      <p>{Summary}</p>
      <p>{Type}</p>
   </div>
  )
}


export default TimeLine;
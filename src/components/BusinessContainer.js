import React from 'react';
import BusinessCard from './BusinessCard';

const BusinessContainer = (props) => {
  return(
    <>
     <h1>Business</h1>
     <div className="skillcontainer">
       {
         props.list.map(
           eachList => <BusinessCard {...eachList} key={eachList.business} />
         )
       }
       
     </div>
    </>  
    
 )
}

export default BusinessContainer;
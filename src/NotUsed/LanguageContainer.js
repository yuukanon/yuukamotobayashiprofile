import React from 'react';
import LanguageCard from './LanguageCard';

const LanguageContainer = (props) => {
  return(
    <>
     <h1>Language</h1>
     <div className="skillcontainer">
       {
         props.list.map(
           eachList => <LanguageCard {...eachList} key={eachList.language} />
         )
       }
       
     </div>
    </>  
    
 )
}

export default LanguageContainer;
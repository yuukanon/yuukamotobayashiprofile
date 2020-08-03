import React from 'react';
import SkillCard from './SkillCard';
import TimeLine2 from './TimeLine2';

const SkillContainer = (props) => {
  return(
    <>
     <h1>Skills</h1>
     <div className="skillcontainer">
       {
         props.list.map(
           eachList => <SkillCard {...eachList} key={eachList.skill} />
         )
       }
       
     </div>
    </>  
    
 )
}

export default SkillContainer;
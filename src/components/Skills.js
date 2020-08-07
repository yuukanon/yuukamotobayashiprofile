import React from 'react';
import SkillContainer from './SkillContainer';
import SkillData from '../SkillData';
import BusinessContainer from './BusinessContainer';
import BusinessData from '../BusinessData';
import LanguageContainer from './LanguageContainer';
import LanguageData from '../LanguageData';

const Skills = () => {
  return(
    <>
      <SkillContainer {...SkillData} />
      <BusinessContainer {...BusinessData} />
      <LanguageContainer {...LanguageData} />
     </>  
    
 )
}

export default Skills;
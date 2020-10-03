import React from 'react';
import SkillContainer from './SkillContainer';
import SkillData from '../SkillData';
import BusinessContainer from '../components/BusinessContainer';
import BusinessData from '../BusinessData';
import LanguageContainer from '../components/LanguageContainer';
import LanguageData from '../LanguageData';
import Modal from 'react-modal';
import pic1 from './IMG_4339.jpg';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#FFF'
  }
};

Modal.setAppElement(document.getElementById('root'));


const Skills = () => {
  const [modalIsOpen1,setIsOpen1] = React.useState(false);
  function openModal1() {
    setIsOpen1(true);
  }
 
  function closeModal1(){
    setIsOpen1(false);
  }

  const [modalIsOpen2,setIsOpen2] = React.useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
 
  function closeModal2(){
    setIsOpen2(false);
  }

  const [modalIsOpen3,setIsOpen3] = React.useState(false);
  function openModal3() {
    setIsOpen3(true);
  }
 
  function closeModal3(){
    setIsOpen3(false);
  }

  return(
    <div className="skillpage">
      <div className="programming" onClick={openModal1}>
        <img src={pic1} alt=""/>
        <h2>Programming</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi!</p>
      </div>
        <Modal
          isOpen={modalIsOpen1}
          onRequestClose={closeModal1}
          style={customStyles}>
          <SkillContainer {...SkillData} />
          <button onClick={closeModal1}>close</button>
        </Modal>
      
      <div className="business" onClick={openModal2}>
        <img src={pic1} alt=""/>
        <h2>Programming</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi!</p>
      </div>
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          style={customStyles}>
          <BusinessContainer {...BusinessData} />
          <button onClick={closeModal2}>close</button>
        </Modal>

      <div className="language" onClick={openModal3}>
        <img src={pic1} alt=""/>
        <h2>Programming</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi!</p>
      </div>
        <Modal
          isOpen={modalIsOpen3}
          onRequestClose={closeModal3}
          style={customStyles}>
          <LanguageContainer {...LanguageData} />
          <button onClick={closeModal3}>close</button>
        </Modal>
    </div>  
    
 )
}

export default Skills;


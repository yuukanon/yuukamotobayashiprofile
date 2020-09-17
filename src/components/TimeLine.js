import React from 'react';
import ReactDOM from 'react-dom';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const TimeLine = () => {

  return (
    <section className="timeline">
      
      <div className="container left">
        <FadeInSection>
          <div className="timelinecontent">
              <h4 className="timelineh4">Implementation Consultant</h4>
              <div className="date">Certain, Inc., April 2020 to Present</div>
              <div className="location">Budapest, Hungary</div><br></br>
              <p className="timeline-p">Offering advice and expertise to clients to help drive better business performance and configuring a customized event platform for them while managing entire projects.</p>
          </div>
        </FadeInSection>    
      </div>

        <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h4 className="timelineh4">Front End Web Developer Course</h4>
              <div className="date">Wild Code School, April 2020 to October 2020</div><br></br>
              <p className="timeline-p">Acquired HTML, CSS, Javascript, and React in less than 5 months. Developed several web pages including a global telecom company for its mainstream product from sctrach. </p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection>    
        </div>

        <div className="container left">
          <FadeInSection>
            <div className="timelinecontent">
            <h4 className="timelineh4">Event Technology Operations Program Manager</h4>
              <div className="date">National Instrumets, January 2015 to March 2020</div>
              <div className="location">Austin, TX USA and Budapest, Hungary</div><br></br>
              <p className="timeline-p">In charge of translating our business and company’s strategy vision into operational processes and system integration requirements. Led technology integration and established effective business systems processes. </p>
            </div>
            </FadeInSection> 
          </div>

          <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h4 className="timelineh4">International MarCom Specialist</h4>
              <div className="date">National Instrumets, March 2011 to December 2014</div>
              <div className="location">Austin, TX USA</div><br></br>
              <p className="timeline-p">Utilized marketing data to provide stakeholders with increased visibility into business drivers and provided Asia Pacific insights and applied variances to streamline campaign executions while aligning content with company strategy.</p>
            </div>
            </FadeInSection>    
        </div>

        <div className="container left">
          <FadeInSection>
            <div className="timelinecontent">
            <h4 className="timelineh4">Master of Business Administration</h4>
              <div className="date">Babson F.W. Olin Graduate School of Business, August 2008 to May 2010</div>
              <div className="location">Wellsley, MA USA</div><br></br>
            </div>
            </FadeInSection> 
        </div>

        <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h4 className="timelineh4">Bachelor of Science, Marketing</h4>
              <div className="date">University of Denver, August 2001 to December 2013</div>
              <div className="location">Denver, CO USA</div><br></br>
            </div>
            </FadeInSection>    
        </div>
    </section>
  )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<TimeLine />, rootElement);

export default TimeLine;

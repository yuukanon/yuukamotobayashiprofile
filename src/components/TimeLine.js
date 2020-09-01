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
              <h2 className="timelineh2">Implementation Consultant</h2>
              <div className="date">Certain, Inc., April 2020 to Present</div><br></br>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
          </div>
        </FadeInSection>    
      </div>

        <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">Front End Web Developer Course</h2>
              <div className="date">Wild Code School, April 2020 to October 2020</div><br></br>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection>    
        </div>

        <div className="container left">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">Event Technology Operations Program Manager</h2>
              <div className="date">National Instrumets, January 2015 to March 2020</div><br></br>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection> 
          </div>

          <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">International MarCom Specialist</h2>
              <div className="date">National Instrumets, March 2011 to December 2014</div><br></br>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection>    
        </div>

        <div className="container left">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">Master of Business Administration</h2>
              <div className="date">Babson F.W. Olin Graduate School of Business, August 2008 to May 2010</div><br></br>
            </div>
            </FadeInSection> 
        </div>

        <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">Bachelor of Science, Marketing</h2>
              <div className="date">University of Denver, August 2001 to December 2013</div><br></br>
            </div>
            </FadeInSection>    
        </div>
    </section>
  )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<TimeLine />, rootElement);

export default TimeLine;

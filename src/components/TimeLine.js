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
              <h2 className="timelineh2">Title</h2>
              <div className="date">1 MAY 2016</div>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
          </div>
        </FadeInSection>    
      </div>

        <div className="container right">
          <FadeInSection>
            <div className="timelinecontent">
            <h2 className="timelineh2">Title</h2>
            <div className="date">1 MAY 2016</div>
              <p className="timeline-p">Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection>    
        </div>

        <div className="container left">
          <FadeInSection>
            <div className="timelinecontent">
              <h2 className="timelineh2">Title</h2>
              <div className="date">1 MAY 2016</div>
              <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a className="btn-more">More</a>
            </div>
            </FadeInSection> 
          </div>
    </section>
  )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<TimeLine />, rootElement);

export default TimeLine;

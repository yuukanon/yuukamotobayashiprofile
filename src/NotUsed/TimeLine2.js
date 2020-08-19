import React, { useState } from 'react';


const TimeLine2 = () => {

  const [open, setOpen] = useState(false);


  return (
   <section className="timeline">
     <div className="container left" onClick={() => setOpen(!open)}>
        {open && <div className="timelinecontent">
          <h2 className="timelineh2">Title</h2>
          <div className="date">1 MAY 2016</div>
          <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          <a className="btn-more">More</a>
        </div>}
      </div>
        
      <div className="container right" onClick={() => setOpen(!open)}>
        {open && <div className="timelinecontent">
          <h2 className="timelineh2">Title</h2>
          <div className="date">1 MAY 2016</div>
          <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          <a className="btn-more">More</a>
        </div>}
      </div>

      <div className="container left" onClick={() => setOpen(!open)}>
        {open && <div className="timelinecontent">
          <h2 className="timelineh2">Title</h2>
          <div className="date">1 MAY 2016</div>
          <p className="timeline-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          <a className="btn-more">More</a>
        </div>}
      </div>
   </section>
  
  )
}


export default TimeLine2;
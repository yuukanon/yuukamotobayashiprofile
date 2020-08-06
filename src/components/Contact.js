import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Tell me what you are looking for!</h3>
      <form className="contact-form" method="POST" action="/contact">
        <div className="form-field">
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Your name" required />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Your email"required />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="message">
            <textarea className="project" name="message" placeholder="Tell me your project"rows="6" required />
          </label>
        </div>

        <button type="submit" className="submit">Submit</button>

        <div>
          { window.location.hash === '#success' &&
            <div id="success">
              <p>Your message has been sent!</p>
            </div>
          }
          { window.location.hash === '#error' &&
            <div id="error">
              <p>An error occured while submitting the form.</p>
            </div>
          }
        </div>
      </form>

    </div>
  )
}

export default Contact
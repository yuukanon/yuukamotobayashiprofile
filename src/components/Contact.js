import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-container">
      <h3>Tell me what you are looking for!</h3>
        <form
          className="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/meqrnbvg"
          method="POST"
        >
          <div className="form-field">
            <label htmlFor="name">
              <input type="text" name="name" placeholder="*Your name" required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="email">
              <input type="email" name="email" placeholder="*Your email"required />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              <textarea className="contact-project" name="message" placeholder="*Tell me your project"rows="6" required />
            </label>
          </div>

          {status === "SUCCESS" ? <p>Thank You! We will get back to you shortly.</p> : <button type="submit" className="submit">Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error. Please fill in the form and resubmit it.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact
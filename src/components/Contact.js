import React from 'react';
import { Form, Button, Segment, Header, Card, Reveal } from "semantic-ui-react";

export default class Contact extends React.Component {
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
      <>
        <Segment inverted>
        <Header inverted as="h2">Contact Me!!</Header>
          <Form
            id="fs-frm"
            name="message-form"
            accept-charset="utf-8"
            onSubmit={this.submitForm}
            action="https://formspree.io/xpzjgejn"
            method="POST"
            inverted
          >
            <Form.Field>
              <label align="left" for="full-name">Full Name</label>
              <input type="text" name="name" id="name" placeholder="First and Last" required=""/>
            </Form.Field>
            <Form.Field>
              <label align="left">Email Address</label>
              <input type="email" name="email" id="email" placeholder="email@domain.tld" required="" />
            </Form.Field>
            <Form.Field align="left">
              <label for="phone">Phone Number (Optional)</label>
              <input type="phone" name="phone" id="phone" placeholder="(555) 555-5555" />
            </Form.Field>
            <Form.Field>
              <label align="left" for="Message">Message</label>
              <textarea rows="6" name="message" id="message" placeholder="Message" required="" />
            </Form.Field>
            <input type="hidden" name="_subject" id="email-subject" value="Message Form Submission" />
            {status === "SUCCESS" ? <p>Thank You!!</p> : <Button>Send</Button>}
            {status === "ERROR" && <p>Shoot! There was a problem.</p>}
          </Form>
        </Segment>
        
        <Header inverted ui block header as="h2">Contact Me Here Aswell</Header>
        <br />
        <Card.Group itemsPerRow={4}>
          <Reveal animated='fade'>
            <Reveal.Content visible>
              <Card raised image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"} href="https://www.linkedin.com/in/adam-venord-51140319a/" target="_blank" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card raised image={'https://brandslogo.net/wp-content/uploads/2015/09/linkedin-black-logo.png'} href="https://www.linkedin.com/in/adam-venord-51140319a/" target="_blank" />
            </Reveal.Content>    
          </Reveal>
          <Reveal animated='fade'>
            <Reveal.Content visible>
              <Card raised image={"https://image.flaticon.com/icons/svg/25/25231.svg"} href="https://github.com/AdamVenord" target="_blank"/>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card raised image={'https://seeklogo.net/wp-content/uploads/2015/09/github-logo.png'} href="https://github.com/AdamVenord" target="_blank" />
            </Reveal.Content>    
          </Reveal>
        </Card.Group>
      </>
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
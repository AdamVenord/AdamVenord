import React, { Component } from 'react'
import { Header, Card, Button, Divider, Transition, Image, Segment } from "semantic-ui-react"
import "../App.css"
import labslogo from "./Imgs/labslogo.png"
import c3p0 from "./Imgs/c3p0.png"
import ruby from "./Imgs/ruby.png"
import react from "./Imgs/react.png"
import rails from "./Imgs/rails.png"
import html from "./Imgs/html.png"
import css from "./Imgs/css.png"
import javascript from "./Imgs/javascript.png"
import sql from "./Imgs/sql.png"
import semantic from "./Imgs/semantic.png"

export default class Project extends Component {
  state = { visible: false }

  toggleVisibility = () =>
  this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
  <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <Header as="h1">Projects And Experience</Header>
  <br />
  <Header ui block header inverted as="h1">Some Of The Languages I Have Experience In</Header>
  <br />
  <Segment style={{ background: "rgba(31, 17, 189, .75)" }} >
    <Card.Group itemsPerRow={6}>
      <Card>
        <Image src={react} style={{ height: "175px" }}  />
      </Card>
      <Card>
        <Image src={rails} style={{  height: "175px" }}  />
      </Card>
      <Card>
        <Image src={html} style={{ width: "200px", height: "175px" }}  />
      </Card>
      <Card>
        <Image src={css} style={{ width: "200px", height: "175px" }}  />
      </Card>
      <Card>
        <Image src={javascript} style={{ width: "200px", height: "175px" }}  />
      </Card>
      <Card>
        <Image src={ruby} style={{ width: "190px", height: "175px" }}  />
      </Card>
      <Card>
        <Image src={sql} style={{ width: "190px", height: "170px" }}  />
      </Card>
      <Card>
        <Image src={semantic} style={{ width: "190px", height: "170px" }}  />
      </Card>
    </Card.Group>
  </Segment>
  <br />
  <hr />
  <br />
  <Card align="center">
    <Image 
      src={labslogo} 
      wrapped ui={false} 
      />
    <Card.Content>
      <Card.Header>Hourglass-2</Card.Header>
      <Card.Description>
        <p>A Project managment app that I worked on with a team at devpoint labs</p>
        <p>
          Me personally I worked on stuff such as the styling of the
          navbar and footer, the images, and and the functionality of the stop watch component 
          that works throughout the whole thing 
        </p>
      </Card.Description>
      <br />
      <Button 
        color="black" 
        href="https://github.com/devpointlabs/hourglass-2"
        target="_blank"
      >View On Github</Button>
    </Card.Content>
  </Card>
  <Card align="center">
    <Image 
      src={c3p0}
      wrapped ui={false} 
      />
    <Card.Content>
      <Card.Header>Starwars Api</Card.Header>
      <Card.Description>
        This was my take home project where I tried to make api calls to a certain website
        and get information for all the characters that I pulled from it.
      </Card.Description>
      <br />
      <Button 
        color="black" 
        href="https://github.com/AdamVenord/The_doctors"
        target="_blank"
      >View On Github</Button>
    </Card.Content>
  </Card>
  <Card align="center">
    <Image 
      src='https://pmcvariety.files.wordpress.com/2016/02/myspace_logo.gif' 
      wrapped ui={false} 
      />
    <Card.Content>
      <Card.Header>My Dude App</Card.Header>
      <Card.Description>
        It's kinda like myspace, tinder, and facebook all in one. Plus A great way to authenticate a user
      </Card.Description>
      <br />
      <Button 
        color="black" 
        href="https://github.com/AdamVenord/my_dude"
        target="_blank"
      >View On Github</Button>
    </Card.Content>
  </Card>
  <br />
    <Divider hidden />
    <Transition visible={visible} animation='slide up' duration={1000}>
      <Image 
        size='medium' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR8ne1cmJ7cFndjBlVkJhgdMd6ejuJubgmdiVakyfAommhBjG&s'
        href='https://github.com/AdamVenord'
        target="_blank"
      />
    </Transition>
    <br />
    <br />
    <br />
    <Button
      color="blue"
      size="massive"
      content={visible ? 'ʕ•ᴥ•ʔ' : 'View The Rest'}
      onClick={this.toggleVisibility}
    />
    <br />
    <br />
    <br />    
  </>
  )
  }
}
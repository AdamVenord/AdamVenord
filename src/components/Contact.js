import React from 'react'
import { Header, Card, Reveal} from "semantic-ui-react"

import "./App.css"

const Contact = () => (
  <>
    <Header ui block header as="h1">Here Are Some Good Ways To Contact Me</Header>
    <Card.Group>
    <Card fluid inverted color='red' header='Phone Number: 801-750-2805 (preferred)' />
    <Card fluid color='orange' header='Email: Adamvenord7@gmail.com' />
  </Card.Group>
  <Header inverted ui block header as="h2">Contact Me Here Aswell</Header>
  <br />
  <Card.Group  itemsPerRow={8}>
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
  
)

export default Contact
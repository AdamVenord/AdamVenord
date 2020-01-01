import React from 'react'
import { Header, Card, } from "semantic-ui-react"

import "./App.css"

const Contact = () => (
  <>
    <Header ui block header as="h1">Here Are Some Good Ways To Contact Me</Header>
    <Card.Group>
    <Card fluid inverted color='red' header='Phone Number: 801-750-2805 (preferred)' />
    <Card fluid color='orange' header='Email: Adamvenord7@gmail.com' />
  </Card.Group>
  </>
  
)

export default Contact
import React from 'react';
import { Header, Image } from "semantic-ui-react";
import Resume from "./Imgs/Resume.png"

const About = () => (
  <>
    <Header as="h1">Resume</Header>
    <Image src={Resume} style={{ width: 850, border: "solid" }} />
    <br />
    <br />
    </>
    )

export default About;
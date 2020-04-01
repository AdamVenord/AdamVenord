import React from 'react';
import { Header, Image } from "semantic-ui-react";
import Resume from "./Imgs/Resume.png"

const About = () => (
  <>
    <Header as="h1">Resume</Header>
    <Image src={Resume} 
      style={{ width: 850, border: "solid", color: "black" }} 
      href="https://docs.google.com/document/d/e/2PACX-1vTnRiNzgVjJcKuOnF9fgqMiZVx6C860aXKqfuUIAup-2R9IqrebZmZ3_flxoQ_d61edyP9tGjGI3JON/pub" 
      target="_blank"
    />
    <br />
    <br />
    </>
    )

export default About;
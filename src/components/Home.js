import React from 'react'
import { Header, } from "semantic-ui-react"
import "./App.css"

const Home = () => (
  <>
    <br />
    <img src={"https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/s960x960/73253468_10220724115200713_408659695763456000_o.jpg?_nc_cat=100&_nc_ohc=SLUSaIM5SpYAQm13G34j6Emhv1wpz5SBWLdUuQ9p0bHCMWPOvq3HQclRA&_nc_ht=scontent.faus1-1.fna&oh=3086e60e88896350b0831df1c9baa3e0&oe=5EAE87DA"}
    alt="Austin and I"
    height="600px"
    align="left"
    />
    <br />
  <Header as="h1">Welcome To Me</Header>
  <div class="ui red card">
    <div class="content">
      <div class="header">I'm Adam Venord</div>
        <div class="description">
          <p>And welcome to my website</p>
          <p>Go ahead and take a look around</p>
      </div>
    </div>
  </div>
  <br />

  </>
)

export default Home;



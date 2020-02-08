import React from 'react'
import { Header, Image} from "semantic-ui-react"
import "../App.css"
import Adam from "./Imgs/Adam.jpg"

const Home = () => (
  <>
    <Header as="h1">Welcome To Me</Header>
      <br />
      <Image src={Adam} style={{ width: 400, position: "absolute", left: "250px"}} />
      <br />
    <div class="ui red card" style={{ width: 400, position: "absolute", right: "250px", background: "cream",}} >
      <div class="content">
        <div class="header" as="h1" >I'm Adam Venord</div>
          <div as="h2">
            <br />
            <p>And welcome to my website</p>
            <p>Go ahead and take a look around</p>
            <p>Thanks for stoping by (ᵔᴥᵔ)</p>
          </div>
        </div>
      </div>
    <br />
  </>
)

export default Home;



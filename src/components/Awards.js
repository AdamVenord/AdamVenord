import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const Awards = () => (
  <>
    <Header ui block header inverted color="violet" as="h1">Certifications I Have Recieved</Header>
    <Image 
      src="https://images.youracclaim.com/size/340x340/images/1d1c9176-df19-4109-9538-4368de8358f9/dev-point-badge-graphic.png" 
      style= {{ right: 250 }}
    />
    <br />
    <Image 
      src="https://images.youracclaim.com/size/340x340/images/a4c1ebbd-63d9-4e18-901c-3b9c7d63ab36/IC3_certification.png" 
      style= {{ left: 250 }}
    />
    <Header 
      ui 
      block 
      header 
      inverted
      color="violet" 
      as="h1"
      style = {{ width: 500, }}
    >
      Other Awards I Have
    </Header>
    <br />
    <Image 
      src="https://images.youracclaim.com/size/340x340/images/bf8594c5-1e2d-4e5b-ab28-09c46bd755a3/IC3_computing_fundamentals.png" 
      style= {{ width: "300px", left: 400 }}
    />
    <br />
    <Image 
      src="https://images.youracclaim.com/size/340x340/images/b4c97286-a3ec-4c84-9095-518e1496869d/IC3_living_online.png" 
      style= {{ width: "300px", }}
    />
    <br />
    <Image 
      src="https://images.youracclaim.com/size/340x340/images/8a8f3497-95a1-4e87-8cbf-4859dd4c4a85/IC3_key_applications.png" 
      style= {{ width: "300px", right: 400 }}
    />
    <br />
  </>
)

export default Awards
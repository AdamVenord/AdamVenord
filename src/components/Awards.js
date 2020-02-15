import React from 'react'
import { Header, Image, Popup } from 'semantic-ui-react'

const Awards = () => (
  <>
    <Header ui block header inverted color="violet" as="h1">Certifications I Have Recieved</Header>
    <Popup 
      trigger={
        <Image 
          src="https://images.youracclaim.com/size/340x340/images/1d1c9176-df19-4109-9538-4368de8358f9/dev-point-badge-graphic.png" 
          style= {{ right: 250 }}
          href="https://www.youracclaim.com/badges/00caf5b9-7419-48ca-b80b-38655fa69e86"
          target="blank"
        />
      }
    >
        <Popup.Header>Click Me To See More</Popup.Header>
    </Popup>
    <br />
    <Popup 
      trigger={
        <Image 
          src="https://images.youracclaim.com/size/340x340/images/a4c1ebbd-63d9-4e18-901c-3b9c7d63ab36/IC3_certification.png" 
          style= {{ left: 250 }}
          href="https://www.youracclaim.com/badges/da4bff31-4f8a-4f56-9aa7-0d61a805a7b7"
          target="blank"
        />
      }
    >
      <Popup.Header>Click Me To See Additional Info</Popup.Header>
    </Popup>
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
    <Popup 
      trigger={
        <Image 
          src="https://images.youracclaim.com/size/340x340/images/bf8594c5-1e2d-4e5b-ab28-09c46bd755a3/IC3_computing_fundamentals.png" 
          style= {{ width: "300px", left: 400 }}
          href="https://www.youracclaim.com/badges/bfc33508-6a07-4055-a044-6d2d41c0650d"
          target="blank"
        />
      }
    >
      <Popup.Header>Pick Me Pick Me</Popup.Header>
    </Popup>
    <br />
    <Popup 
      trigger={
        <Image 
          src="https://images.youracclaim.com/size/340x340/images/b4c97286-a3ec-4c84-9095-518e1496869d/IC3_living_online.png" 
          style= {{ width: "300px", }}
          href="https://www.youracclaim.com/badges/b8c7a447-6380-4221-bef5-0f45f35816c5"
          target="blank"
        />
      }
    >
      <Popup.Header>Want To Know More? Click Me</Popup.Header>
    </Popup>
    <br />
    <Popup 
      trigger={
        <Image 
          src="https://images.youracclaim.com/size/340x340/images/8a8f3497-95a1-4e87-8cbf-4859dd4c4a85/IC3_key_applications.png" 
          style= {{ width: "300px", right: 400 }}
          href="https://www.youracclaim.com/badges/082892d2-cc59-4294-b7c9-8d1b61674849"
          target="blank"
        />
      }
    >
      <Popup.Header>I bet you wanna know if im legit huh</Popup.Header>
    </Popup>
    <br />
  </>
)

export default Awards
import React from 'react'
import { Header, Reveal, Card,} from "semantic-ui-react"
import "./App.css"

const About = () => (
  <>
  <Header ui block header inverted as="h1">Things About Me</Header>
  <Reveal animated='move'>
    <Reveal.Content visible>
      <img src='https://www.londonguitaracademy.com/wp-content/uploads/l_guitar-lesson.jpg' 
        width="300px"
        height="300px"
        alt="first1"
        align="left"
        />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX34065290.jpg' 
        width="300px"
        height="300px"
        alt="first"
        align="left"
        />
      <Card color='purple'>
        <Card.Content header='Im A Musician' />
        <Card.Content description="Since I was a kid when I played guitar hero and listened to
          green day for the first time, I have been infatuated with music. Nowadays I play the guitar,
          drums, bass, piano, ukelele, Sing, and other various things. I love performing 
          and writing music." />
      </Card>
    </Reveal.Content>
  </Reveal>
  <br />
  <Reveal animated='move up'>
    <Reveal.Content visible >
      <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*' 
        width="300px"
        height="300px"
        alt="second1"
        align="left"
        />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://cdn.clipart.email/ce1c4d627214a85d97f7b7e4697943b4_i-love-nature-home_754-743.jpeg' 
        width="300px"
        height="300px"
        alt="second"
        align="left"
        />
      <Card  color='pink'>
        <Card.Content header='I Love To Explore' />
        <Card.Content description="Nature and I have always been best friends. 
          I love to go outside and explore everywhere. I go on hikes all the time
          and adventuring around. I love swimming, biking, running, skating, boating, etc.
          If Its a good time outside, im down." />
      </Card>
    </Reveal.Content>
  </Reveal>
  <br />
  <Reveal animated='move down'>
    <Reveal.Content visible >
      <img src='https://i.redd.it/i2xzuzhfnqn01.png' 
        width="300px"
        height="300px"
        alt="third1"
        align="left"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://www.askideas.com/wp-content/uploads/2017/08/I-love-video-games-happy-National-Video-Games-Day.jpg' 
        width="300px"
        height="300px"
        alt="third"
        align="left"
      />
    <Card color='blue'>
    <Card.Content header='Im A Gamer' />
    <Card.Content description="I have been playing games for as long as I can remember.
      Games have so much to offer and the more time goes on the more advanced they get.
      I have lived a hundred lifetimes in a hundred different stories and have loved 
      every moment of it." />
  </Card>
    </Reveal.Content>
  </Reveal>
  <br />
  <Reveal animated='move left'>
    <Reveal.Content visible >
      <img src='https://i.pinimg.com/originals/78/96/d4/7896d444d2e3a12cac3816f8344a7c38.jpg' 
        width="300px"
        height="300px"
        alt="fourth1"
        align="left"
        justify-content="right"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://data.whicdn.com/images/54797603/original.png' 
        width="300px"
        height="300px"
        alt="fourth"
        align="left"
      />
    <Card color='green'>
    <Card.Content header='Im A Pet Kind Of Guy' />
    <Card.Content description="I have had all sorts of pets over the years. 
      Fish, birds, lizards, cats, dogs, snakes. You name it. I love all animals
      and get overly excited whenever i see one or get to pet or hold one." />
  </Card>
    </Reveal.Content>
  </Reveal>
  <br />
  <Reveal animated='move up'>
    <Reveal.Content visible >
      <img src='https://i.imgur.com/IeZUV5a.jpg' 
        width="300px"
        height="300px"
        alt="fourth1"
        align="left"
        justify-content="right"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1dac33e-b1b2-4406-95d4-3d9c94b5dccb/d1ywqye-1a819a40-e5ef-4971-bd78-25d87a91323e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZGFjMzNlLWIxYjItNDQwNi05NWQ0LTNkOWM5NGI1ZGNjYlwvZDF5d3F5ZS0xYTgxOWE0MC1lNWVmLTQ5NzEtYmQ3OC0yNWQ4N2E5MTMyM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1EjQ5aa3G5yfQFAmJlJNwUaUjpCfAsStlzBepRmZbHw' 
        width="300px"
        height="300px"
        alt="fourth"
        align="left"
      />
    <Card color='orange'>
    <Card.Content header='Art Is My Drive' />
    <Card.Content description="I have always loved art, while my art isn't the best out there
      I still love to draw. I love other peoples art and love to look at it.
      Art has a way of showing me whats going on in someones head, aswell as show me the
      story of how they made it." />
  </Card>
    </Reveal.Content>
  </Reveal>
  <br />
  <Reveal animated='move down'>
    <Reveal.Content visible >
      <img src='https://m.media-amazon.com/images/M/MV5BNDhhZDIxMmUtNGY3YS00MTIwLTk3OTQtOGJlYmZlYWM2NWUzXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_CR0,0,1315,1000_AL_.jpg' 
        width="300px"
        height="300px"
        alt="fourth1"
        align="left"
        justify-content="right"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <img src='https://res.cloudinary.com/teepublic/image/private/s--AGIuCWK8--/t_Preview/b_rgb:191919,t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1534855595/production/designs/3049694_0.jpg' 
        width="300px"
        height="300px"
        alt="fourth"
        align="left"
      />
    <Card color='red'>
    <Card.Content header='Horror Is My Forte' />
    <Card.Content description="As a kid I was pretty scared of things. I loved and hated the
      feeling of being spooked. Nowadays I just love it. Anything horror is my bestfriend and
      I plan to keep it that way." />
  </Card>
    </Reveal.Content>
  </Reveal>
  <Header ui block header as="h2">Or Check Me Out Here As Well</Header>
  <Card.Group  itemsPerRow={6}>
    <Reveal animated='fade'>
      <Reveal.Content visible>
        <Card raised image={"https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300"} href="https://www.instagram.com/adamvenord/?hl=en"/>
      </Reveal.Content>
      <Reveal.Content hidden>
        <Card raised image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UhUoRJ_46Qfm5j3OFWi7ls5Q2t2mmYxcDIcLESOkKL2GUEOA&s'} href="https://www.instagram.com/adamvenord/?hl=en" />
      </Reveal.Content>    
    </Reveal>
    <Reveal animated='fade'>
      <Reveal.Content visible>
        <Card raised image={"https://stpetersburggroup.com/wp-content/uploads/2018/05/Facebook-Logo.png"} href="https://www.facebook.com/adam.venord" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Card raised image={'https://media.wired.com/photos/5954a23f8e8cc150fa8ec722/master/pass/facebook_2015_logo_detail.jpg'} href="https://www.facebook.com/adam.venord" />
      </Reveal.Content>    
    </Reveal>
  </Card.Group>
</>
)

export default About;


import React, { } from 'react';
import { Link, } from 'react-router-dom';
import { Menu, Segment, } from "semantic-ui-react";

const Navbar = () => (
  <Segment inverted style={{ background: "black", }}>
    <Menu inverted width="100%">
      <Link to="/home">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>
          About
        </Menu.Item>
      </Link>
      <Link to="/projects">
        <Menu.Item>
          Projects/Experience 
        </Menu.Item>
      </Link>
      <Link to="/resume">
        <Menu.Item>
          Resume
        </Menu.Item>
      </Link>
      <Link to="/awards">
        <Menu.Item>
          Awards And Certifications
        </Menu.Item>
      </Link>
      <Link to="/contact">
        <Menu.Item>
          Contact
        </Menu.Item>
      </Link>
    </Menu>
  </Segment>
)

export default Navbar;


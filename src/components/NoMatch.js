import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Header, } from "semantic-ui-react";

const NoMatch = () => (
  <div style={styles.container}>
    <Header >
      <container inverted>
        <Header as="h1" style={styles.header}>Uh Oh</Header>
        <Header as="h2">404 Town</Header>
        <Header as="h3">Head On Home</Header>
        <Link to="/home">
          <Button color="black">Home</Button>
        </Link>
      </container>
    </Header>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "50px",
  },
};

export default NoMatch;
import React, { Component } from 'react';

import { Jumbotron, Card, CardBody } from 'reactstrap';

import Fortune from '../../assets/fortune.json';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.fortune = Math.floor(Math.random()*Fortune.length);
  }
  
  render() {
    return (
      <div>
      <Jumbotron>
        <h2 className="text-white pb-2">Welcome back!</h2>
        <h5 className="text-white op-7 mb-2">{Fortune[this.fortune]}</h5>
      </Jumbotron>
      <Card className="mt--5">
        <CardBody>
          <p>Hello, world!</p>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Dashboard;

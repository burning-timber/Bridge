import React, { Component } from 'react';

import { Jumbotron, Card, CardBody } from 'reactstrap';

import Fortune from '../../assets/fortune.json';

import { useAuth0 } from "../../react-auth0-spa";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.fortune = Math.floor(Math.random()*Fortune.length);

    var StellarSdk = require('stellar-sdk');
    this.stellar = new StellarSdk.Server('https://horizon.stellar.org');

    this.state = {
        stellar_account: null
    }    
  }
  
  storeStellarAccount = (account) => {
    console.log(account);
    this.setState({ stellar_account: account });
  }

  componentDidMount() {
    this.stellar.accounts()
      .accountId('GA4FQMKUH2WHNF7MH2XRLQJ7DNNGL5E3E23WQX5WJDQUPKL7YNLD2Z67')
      .call().then(this.storeStellarAccount);
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
          {this.state.stellar_account ?
            this.state.stellar_account.balances[0].balance :
            'Hello World'
          }
          <p>This system is for the use of authorized users only.</p>
          <p>Individuals using this computer system without authority, or in 
          excess of their authority, are subject to having all of their 
          activities on this system monitored and recorded by system personnel.  
          In the course of monitoring individuals improperly using this system, 
          or in the course of system maintenance, the activities of authorized 
          users may also be monitored.</p>
          <p>Anyone using this system expressly consents to such monitoring and 
          is advised that if such monitoring reveals possible evidence of 
          criminal activity, system personnel may provide the evidence of such 
          monitoring to law enforcement officials.</p>
        </CardBody>
      </Card>
      
      </div>
    );
  }
}

export default Dashboard;

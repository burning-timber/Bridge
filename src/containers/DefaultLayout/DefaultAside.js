import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'amazon-connect-streams';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);
    this.containerDiv = React.createRef();
  }
  
  componentDidMount() {
    // eslint-disable-next-line no-undef
    connect.core.initCCP(this.containerDiv.current, {
      ccpUrl: 'https://burningtimber.awsapps.com/connect/ccp-v2/',
      loginUrl: 'https://burningtimber.auth0.com/samlp/IXfZthb3neyoDHUfB27Mc8bNMzQQuTWI?RelayState=https://us-east-1.console.aws.amazon.com/connect/federate/ff9e0789-24dc-4723-90e6-d9d2a6dc4b19?destination=%2Fconnect%2Fccp',
      loginPopup: true,
      softphone: {
        allowFramedSoftphone: true
      }
    });
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
          {/* ccp */}
          <div className="containerDiv" ref={this.containerDiv} style={{height: "100%"}} />
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;

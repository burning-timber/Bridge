import React, {  useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chat from 'twilio-chat';
//import { Chat as ChatUI } from '@progress/kendo-react-conversational-ui';

import { useAuth0 } from "../../react-auth0-spa";
import API from '../../api';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultAside = (props) => {
  const { getTokenSilently } = useAuth0();
  const [ error, setError ] = useState('');
  const [ isLoading, setLoading ] = useState(true);
  const [ messages, setMessages ] = useState([]);
  

  // eslint-disable-next-line
  const { children, ...attributes } = this.props;

  return (
    <React.Fragment>
        <div className="containerDiv" ref={this.containerDiv} style={{height: "100%"}} />
    </React.Fragment>
  );
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;

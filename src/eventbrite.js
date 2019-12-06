import React, { useState } from "react";
import { useAuth0 } from "./react-auth0-spa";

const BridgeApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  

  const eventApi = async (httpMethod, apiEndpoint) => {
    try {
      const eb = require('eventbrite');
      const token = await getTokenSilently();
    
      const eventbrite = eb({
        baseUrl: 'https://bridge-api.burningtimber.com/v1/event',
        token: token
      });

      const response = await fetch(apiEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };
};
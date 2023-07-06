import React from "react";
import { useState, useEffect } from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';

function Paiement() {
    const [clientToken, setClientToken] = useState(null);
    let instance;
  
    useEffect(() => {
      const fetchClientToken = async () => {
        // Get a client token for authorization from your server
        const response = await axios.get("api/paiement/client_token");
        const clientToken = response.data;
  
        setClientToken(clientToken);
      };
  
      fetchClientToken();
    }, []);
  
    const buy = async () => {
      // Send the nonce to your server
      const { nonce } = await instance.requestPaymentMethod();
      await axios.post(`api/paiement/paiement/${nonce}`);
    };
  
    if (!clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  return (
    <div>
         <DropIn
        options={{ authorization: clientToken }}
        onInstance={(instance) => (instance = instance)}
      />
      <button onClick={buy}>Buy</button>
    </div>
  )
}

export default Paiement
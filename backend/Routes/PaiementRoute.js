const express = require('express');
const router = express.Router();
const braintree = require('braintree');




const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox, // Mettez "Production" pour un environnement de production
  merchantId: 'nmwdm57373dmcq8q',
  publicKey: 'tmkt6hm672hrxjvp',
  privateKey:  '2122d3b098ab625ec300c2f543236a8a'
});



  router.get('/client_token', (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response.clientToken);
      }
    });
  });
  router.post('/paiement/:nonce', (req, res) => {
    const nonce = req.params.nonce;
  
    gateway.transaction.sale({
      amount: '10.00', // Montant à débiter
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    }, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  })

module.exports= router


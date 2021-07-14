const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IsA7sHzIRmGLkYgMfaQH883Y07DUUfi8vbDHVtawLm1k00bTfAlz2DW51hVSzk2qHNo3FuH6S2BxijJgBCseV9i007VlEr7v1')

// API

// App Config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    //console.log('Payment Request Received BOOM!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

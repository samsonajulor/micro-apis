import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const { json } = bodyParser;

const app = express();
app.use(json());

app.post("/events", (req, res) => {
  const event = req.body;

  // send event to the post service
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message, 'error from the post event');
  });

  // send event to the comments service
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message, 'error from the comments event');
  });

  // send event to the moderation service
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });

  // send event to the query service
  axios.post('http://localhost:4006/events', event).catch((err) => {
    console.log(err.message, 'error from the query event');
  });

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});

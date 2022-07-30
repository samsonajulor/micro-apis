import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import handleEvent from './utils/eventHandler';

const { json } = bodyParser;
const app = express();
app.use(json());
app.use(cors());

let posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data, posts);

  res.send({});
});

app.listen(4006, async () => {
  console.log('Listening on 4006');
  try {
    const res = await axios.get("http://localhost:4005/events");

    for (let event of res.data) {
      console.log("Processing event:", event.type);

      posts = handleEvent(event.type, event.data, posts);
    }
  } catch (error) {
    console.log(error.message);
  }
});

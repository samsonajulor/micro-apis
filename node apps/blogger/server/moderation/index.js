import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import axios from 'axios';

const { json } = bodyParser;

const app = express();
app.use(json());
app.use(cors());

app.post('/events', (req, res) => {});

app.listen(4003, () => {
  console.log('Listening on 4003');
});

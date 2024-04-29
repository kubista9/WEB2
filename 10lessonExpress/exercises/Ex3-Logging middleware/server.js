import express from 'express';
import { POKEMON } from './Pokemon.js';

const app = express();

app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next(); 
});

app.get("/pokemon/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const pokemon = POKEMON.find(pokemon => pokemon.id === reqId);
  if (pokemon) {
      res.send(pokemon);
  } else {
      res.status(404).send({ msg: "No pokemon with the id of " + reqId });
  }
});
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

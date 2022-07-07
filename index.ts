import { Response, Request } from './node_modules/@types/express/index.d';
import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req : Request, res : Response) => {

  res.send("API Online!")
})

app.listen(PORT, () => {
  console.log("ON!")
});
import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

const router = express.Router();
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("First middleware.");
    next();
});


app.use(router);


app.listen({port:8000}, () =>{
    console.log("express server started.")
});

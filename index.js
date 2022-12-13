import {Utility} from "./Utility.js";
import express from "express";
import bodyParser from "body-parser";



const app= express();
const PORT = 3000;
app.use(bodyParser.json({limit: '50mb'}));
app.listen(PORT, () => {
    console.log("Server in ascolto su "+ PORT);
});

let utilities= [new Utility(5), new Utility(10) ];

/*cerca l'elemento con valore a, se non lo trova restituisce l'intero array*/
app.get('/:a', (req, res, _next) =>{

})

app.post('/:a', (req, res, _next) =>{

})

app.delete('/:a', (req, res, _next) =>{

})

/*PUT usato per modificare il valore di un elemento cercandolo per parametro*/
app.put('/:a', (req, res, _next) =>{

})
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
app.put('/:old/:new', (req, res, _next) =>{
    if(utilities.length === 0) {
        res.json('DB vuoto')
        return
    }
    console.log(req.params)
    console.log(req.params['old'])
    for(let i = 0; i < utilities.length; i++){
        console.log(utilities[i].a)
        if(utilities[i].a == req.params['old']) {
            console.log('Sosituisco ' + utilities[i].a)
            utilities[i].a = req.params['new']
            console.log(' con ' + req.params['new'])
            console.log(utilities)
            res.json('Sostituito ' + req.params['old'] + ' con ' + req.params['new'])
            return
        }
    }
    res.json('Non esiste')
})
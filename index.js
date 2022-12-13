import {Utility} from "./Utility.js";
import express from "express";
import bodyParser from "body-parser";



const app = express();
const PORT = 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.listen(PORT, () => {
    console.log("Server in ascolto su " + PORT);
});

let utilities = [new Utility(5), new Utility(10)]

/*GET:cerca l'elemento con valore a, se non lo trova restituisce l'intero array*/
app.get('/:a', (req, res, _next) => {

})

/*POST:prende un parametro e l'aggiunge all'array creato*/
app.post('/:a', (req, res, _next) => {
    utilities.push(req.params.a);
    console.log(utilities)
    console.log('i dati sono stati caricati sul server')
    res.send('dati ricevuti correttamente e caricati')


    /*DELETE:usato per eliminare un elemento dall'array di dati*/
    app.delete('/:a', (req, res, _next) => {
        if (utilities.length === 0) {
            res.send('array vuoto')
            return
        }
        for (let i = 0; i < utilities.length; i++) {
            if (utilities[i].a === parseInt(req.params.a)) {
                utilities.splice(i, 1)
                console.log('eliminato')
                res.send('eliminato')
            }
        }

        console.log(utilities)

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
        if(utilities[i].a === parseInt(req.params['old'])) {
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
})

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

/*GET:cerca l'elemento con valore a, se non lo trova restituisce 404 not found*/
app.get('/:a?', (req, res, _next) => {
    if(!req.params.a) return res.send(utilities);
    const trovatoValore = utilities.find((utility) => {
        return utility._a === parseInt(req.params.a)
    })
    if (trovatoValore)
        return res.send(trovatoValore);
    return res.status(404).send('elemento non trovato');
})

/*POST:prende un parametro e l'aggiunge all'array creato*/
app.post('/', (req, res, _next) => {
    utilities.push(new Utility(parseInt(req.body.a)));
    console.log(utilities)
    console.log('i dati sono stati caricati sul server')
    res.send('dati ricevuti correttamente e caricati')
})

/*DELETE:usato per eliminare un elemento dall'array di dati*/
app.delete('/:a', (req, res, _next) => {
    if (utilities.length === 0) return res.send('array vuoto')

    const i= utilities.findIndex(({a}) => {
        return a === parseInt(req.params.a)
    })
    if (i===undefined) return res.status(404).send('elemento non trovato');
    const deletedValue= utilities[i];
    utilities.splice(i, 1)
    return res.send(deletedValue)

})


/*PUT usato per modificare il valore di un elemento cercandolo per parametro*/
app.put('/:a', (req, res, _next) => {
    if (utilities.length === 0) return res.json('DB vuoto')

    console.log(req.params)

    const trovatoValore = utilities.find((utility) => {
        return utility._a === parseInt(req.params.a)
    })
    if (!trovatoValore) return res.status(404).send('elemento non trovato');
    trovatoValore.a= req.body.a;
    return res.json(trovatoValore)

})


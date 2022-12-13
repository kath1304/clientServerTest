import axios from "axios";

/*const response= async () => {
    try {
        let answer = await axios.post('http://localhost:3000/20')
        console.log(answer)
    } catch {
        console.error('non sono stati caricati i dati richiesti')
    }
}
response()*/

//RIFERIMENTO CLIENT AL MOTODO POST
const testPost = () => {
    axios.post('http://localhost:3000/20')
        .then(answer => console.log(answer['data']))
        .catch(error => console.log(error))
}


//RIFERIMENTO CLIENT AL METODO DELETE
const testDelete = () => {
    axios.delete('http://localhost:3000/5')
        .then(answer => console.log(answer['data']))
        .catch(error => console.log(error))
}


//RIFERIMENTO CLIENT AL METODO PUT
const testPut = () => {
    axios.put('http://localhost:3000/10/7')
        .then(answer => console.log(answer['data']))
        .catch(error => console.log(error))
}


//RIFERIMENTO CLIENT AL METODO GET
const testGet = () => {
    axios.get('http://localhost:3000/5')
        .then(answer => console.log(answer['data']))
        .catch(error => console.log(error))
    axios.get('http://localhost:3000/1')
        .then(answer => console.log(answer['data']))
        .catch(error => console.log(error))
}

//AVVIO DEI METODI

testGet()
testPost()
testPut()
testDelete()







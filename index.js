const express = require ('express');

const app = express();

//const porta = process.env.Port || 3333;

const porta = 3333;

//define a porta - ver qual está disponivel no servidor 

app.listen(porta, () => {
console.log('Servidor iniciado na porta: localhost:' + porta);
})
app.get ('/', (request, response) =>{
    response.send ("hello world")
})

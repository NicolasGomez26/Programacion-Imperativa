const alicia = [23,69,32,1];
const bob = [12,167,43,0];

function encontrarGanador(a,b) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    
    for (let i = 0; i < a.length; i++) {
        const ali = a[i];
        const bob = b[i];
        if (ali > bob ) {
            puntosPrimerParticipante +=1
        }
        else if (bob > ali){
            puntosSegundoParticipante +=1
        }
    }
    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        return "Alicia"
    }
    else if(puntosPrimerParticipante < puntosSegundoParticipante){
        return "Bob"
    }
    else{
        return "Hay empate"
    }
}

console.log(encontrarGanador(alicia, bob));
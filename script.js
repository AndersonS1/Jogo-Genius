let order = [];
let clickOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul


const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.lenght]=colorOrder;
    clickOrder=[];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor=(element, number)=>{
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
   }, number - 250);
   setTimeout(()=>{
       element.classList.remove('selected');
   });
}

let checkOrder = () =>{
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break; 
        }
    }
    if(clickOrder.length == order.length){
        alert('Pontuação: ${score}\nVocê Acertou! Próximo Nível!');
        nextLevel();
    }
}

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createColorElement = (color) =>{
    if(color == 0){
        return verde;
    } else if( color == 1){
        return vermelho;
    } else if(color == 2){
        return amarelo;
    } else if (color == 3){
        return azul;
    }
}

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert('Pontuação:${score}!\nVocê perdeu o jogo \nClique em OK para iniciar novo jogo');
    order =[];
    clickOrder = [];

    playGame();
}

let playGame = () =>{
    alert('Bem vindo ao Jogo');
    score = 0;

    nextLevel();
}

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();
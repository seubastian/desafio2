//canvas
var tabuleiro = document.getElementById('forca').getContext('2d');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//boneco 

function desenhaEnforcado(erros) {
  if (erros == 5) {
    desenhaCabeca();
    erros -=1;
    return;
  } else if (erros == 4) {
    //corpo
    desenhaCorpo(200, 200, 200, 250);
    erros -=1;
    return;
  } else if (erros == 3) {
    //braço esquerdo
    desenhaCorpo(200, 225, 170, 220);
    erros -=1;
    return;
  } else if (erros == 2) {
    //braco direito
    desenhaCorpo(200, 225, 230, 220);
    erros -=1;
    return;
  } else if (erros == 1) {
    //perna esquerda
    desenhaCorpo(200, 249, 170, 320);    
    erros -=1;
    return;
} else if (erros == 0) {
    //perna direita
    desenhaCorpo(200, 249, 230, 320);
    erros -=1;
    derrota();
    document.removeEventListener("keydown", escutaTeclado);
  }
return;
    
}

  //forca
function desenhaForca() {
    desenhaLinha(135, 420, 45, 420);
    desenhaLinha(90, 422, 90, 99);
    desenhaLinha(86, 422, 86, 99);
    desenhaLinha(85, 200, 150, 100);
    desenhaLinha(85, 100, 200, 101);
    desenhaLinha(200, 99, 200, 145);
    desenhaLinha(180, 145,220, 145);
    desenhaLinha()
}


// cabeca
function desenhaCabeca(x, y, raio, cor) {
  // desenhaCirculo(200, 175, 25, "RGB(0,0,0)");
   desenhaCirculo(200, 175, 23, "RGB(255,205,155)");
   desenhaCirculo(190, 175, 5, "RGB(0,0,0)");
   desenhaCirculo(210, 175, 5, "RGB(0,0,0)");
   desenhaCirculo(200, 190, 5, "RGB(255,0,0)");
}

//linha

function desenhaLinha(xa, ya, xb, yb) {
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xb, yb);
    pincel.lineWidth = 5;
    pincel.strokeStyle = "RGB(102,51,0)";
    pincel.stroke();
}
//Corpo

function desenhaCorpo(xa, ya, xb, yb) {
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xb, yb);
    pincel.lineWidth = 5;
    pincel.strokeStyle = "RGB(255,205,155)";
    pincel.stroke();
    
 }
 
 //circulo
 
 function desenhaCirculo(x, y, raio, cor) {
     pincel.fillStyle = cor;
     pincel.beginPath();
     pincel.arc(x, y, raio, 0, 2 * Math.PI);
     pincel.fill();
 }

function escreverTracinhos(){
   tabuleiro.lineWidth = 6;
   tabuleiro.lineCap = "round";
   tabuleiro.lineJoin = "round";
   tabuleiro.strokeStyle = "RGB(251,36,36)";
   tabuleiro.beginPath();
   var eixo = 600/palavraSecreta.length;
   for(let i = 0; i < palavraSecreta.length; i++) {
       tabuleiro.moveTo(500 + (eixo * i), 360);
       tabuleiro.lineTo(550 + (eixo * i), 360);
   }
   tabuleiro.stroke();
   tabuleiro.closePath();
}


function escreverLetraCorreta(index) {
   tabuleiro.font = " 51px Lato";
   tabuleiro.lineWidth = 6;
   tabuleiro.lineCap = "round";
   tabuleiro.lineJoin = "round";
   tabuleiro.fillStyle = "#0000ff";
   

   var eixo = 600/palavraSecreta.length;
   tabuleiro.fillText(palavraSecreta[index], 505 + (eixo * index), 340);
   tabuleiro.stroke();
  
}

function escreverLetraIncorreta(letra, errorsLeft){
   tabuleiro.font = ' 30px Lato';
   tabuleiro.lineWidth = 6
   tabuleiro.lineCap = "round"
   tabuleiro.ineJoin = "round"
   //tabuleiro.fillStyle = "#495057"
   tabuleiro.fillStyle = "#000000"
   tabuleiro.fillText(letra, 300+(40*(10-errorsLeft)),430,40)

}

//limpa canvas
function limpaCanvas() {
pincel.clearRect(150, 120, 100, 290);
pincel.clearRect(400, 300, 900, 200);
pincel.clearRect(500, 75, 700, 150);
 desenhaForca();
}

// cancelar
btnCancelar.addEventListener("click", function() {
    retornaPaginaInicial();
});

// novo jogo
btnNovoJogo.addEventListener("click", function() {
    iniciaJogo();

    document.addEventListener("keydown", escutaTeclado = (e) => {
      var letra = e.key.toUpperCase();
      var codigo = e.keyCode;

      if((somenteLetras(codigo)) && (!verificarLetraCorreta(e.key))) {
        if(palavraSecreta.includes(letra)){
          adicionarLetraCorreta(palavraSecreta.indexOf(letra))
                 for(let i = 0; i < palavraSecreta.length; i++) {
                     if(palavraSecreta[i] === letra) {
                         escreverLetraCorreta(i);
                         letrasCorretas.push(letra);
                         verificaVitoria();
                     }

                 }
        }
        else if (!(palavraSecreta.includes(letra))){
                 adicionarLetraIncorreta(letra);
                 escreverLetraIncorreta(letra, erros);
                 desenhaEnforcado(erros);
        }
      }
    });
});

// desistir
btnDesistir.addEventListener("click", function() {
    retornaPaginaInicial();
});

// iniciar jogo na tela inicial
iniciaJogoBtn.addEventListener("click", function(){
    iniciaJogo();
});

// adicionar palavra
adicionaPlavraBtn.addEventListener("click", function() {
    telaInicial.classList.add("hide");
    footer.classList.add("hide");
    secaoInput.classList.remove("hide");
    inputAddPalavra.focus();
    paginaAtual = secaoInput;
});

// salvar palavra no input
btnSalvarPalavra.addEventListener("click", function() {
    verificaPalavraDoInput();
});


btnSalvaInicia.addEventListener("click", function() {
    limpaCanvas();
    letras = [];
    letrasCorretas = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    secaoInput.classList.add("hide");
    footer.classList.add("hide");
    secaoJogo.classList.remove("hide");
    paginaAtual = secaoJogo;

    document.addEventListener("keydown", escutaTeclado = (e) => {
        var letra = e.key.toUpperCase();
        var codigo = e.keyCode;
      
        if((somenteLetras(codigo)) && (!verificarLetraCorreta(e.key))) {
          if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
                   for(let i = 0; i < palavraSecreta.length; i++) {
                       if(palavraSecreta[i] === letra) {
                           escreverLetraCorreta(i);
                           letrasCorretas.push(letra);
                           verificaVitoria();
                       }
      
                   }
          }
          else if (!(palavraSecreta.includes(letra))){
                   adicionarLetraIncorreta(letra);
                   escreverLetraIncorreta(letra, erros);
                   desenhaEnforcado(erros);
          }
        }
      });
});

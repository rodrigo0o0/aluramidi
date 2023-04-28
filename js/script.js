function play(seletorAudio){
    const elemento = document.getElementById(seletorAudio);
    if(elemento && elemento.localName == 'audio'){

        elemento.play();
    }else{
        console.log("elemento não encontrado")
    }

}




const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const classe = listaTeclas[i].classList[1]
    const tecla = listaTeclas[i];
    listaTeclas[i].onclick = function (){
        play('som_' + classe);

    }
    tecla.onkeydown = function (event) {
        if(event.code == 'Space' || event.code == 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
    
}


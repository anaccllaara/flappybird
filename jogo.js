const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d');

    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 35,
    altura: 25,
    x: 10,
    y: 50,
        desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

const imagemDeFundo = {
    spriteX: 390,
    spriteY: 3,
    largura: 275,
    altura: 201,
    x: 0,
    y: 279,
        desenha() {
        contexto.drawImage(
            sprites,
            imagemDeFundo.spriteX, imagemDeFundo.spriteY,
            imagemDeFundo.largura, imagemDeFundo.altura,
            imagemDeFundo.x, imagemDeFundo.y,
            imagemDeFundo.largura, imagemDeFundo.altura,
        );
        contexto.drawImage(
            sprites,
            imagemDeFundo.spriteX, imagemDeFundo.spriteY,
            imagemDeFundo.largura, imagemDeFundo.altura,
            imagemDeFundo.x+imagemDeFundo.largura, imagemDeFundo.y,
            imagemDeFundo.largura, imagemDeFundo.altura,
        );
    }
}

const chao = {
    spriteX: 1,
    spriteY: 610,
    largura: 219,
    altura: 109,
    x: 0,
    y: 372,
        desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x+chao.largura, chao.y,
            chao.largura, chao.altura,
        );
    }
}

function loop(){

    flappyBird.desenha();
    imagemDeFundo.desenha();
    chao.desenha();
        
    requestAnimationFrame(loop);
}

loop();

//width largura x
//height altura y

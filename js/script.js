
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restartGame = document.querySelector('btn-restart')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');
        
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe
.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition)

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    playAgain()

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/go.png'
    mario.style.width = '4.688rem'
    mario.style.marginLeft = '3.125rem'

    clearInterval(loop);

}
}, 10);

function playAgain() {
    document.querySelector('.btn-restart').style.display = 'flex'
}

function restart() {
    document.location.reload(true)

}


document.addEventListener('click', jump)
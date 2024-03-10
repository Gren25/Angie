document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.querySelector('#yesBtn');
    const noBtn = document.querySelector('#noBtn');

    yesBtn.addEventListener('click', function() {
        alert('Sabía Que Dirías Que sí, Carenalga');
        alert('Quiéreme mucho, síííííííííííí');
        alert('Att: Grencito ')
    });

    noBtn.addEventListener('mouseenter', function() {
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = 'absolute'; 
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});


const audio = document.getElementById('myAudio');

const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');


playButton.addEventListener('click', function() {
    audio.play(); 
});


pauseButton.addEventListener('click', function() {
    audio.pause(); 
});

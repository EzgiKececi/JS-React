
const sounds = {
    A: new Audio('src/boom.wav'), 
    S: new Audio('src/clap.wav'), 
    D: new Audio('src/hihat.wav'), 
    F: new Audio('src/kick.wav'), 
    G: new Audio('src/openhat.wav'), 
    H: new Audio('src/ride.wav'), 
    J: new Audio('src/snare.wav'), 
    K: new Audio('src/tink.wav'), 
    L: new Audio('src/tom.wav')  
};


const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = sounds[button.id];
        sound.play();
    });
});

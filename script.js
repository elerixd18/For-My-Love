const envelopeWrapper = document.getElementById("envelopeWrapper");
const welcome = document.getElementById("welcome");
const loveLetter = document.getElementById("loveLetter");
const tapHint = document.getElementById("tapHint");
const letterText = document.getElementById("letterText");
const restartButton = document.getElementById("restartButton");
const floatingHearts = document.getElementById("floatingHearts");

let opened = false;
let typingTimer = null;
let heartTimer = null;

const message = `A veces me pongo a pensar en lo lindo que fue que nuestros caminos se cruzaran.

Entre tantas personas, tantas historias y tantos momentos, la vida me permitió conocerte a vos. Y si hay algo que agradezco de verdad, es poder tenerte en mi vida.

Me gusta saber que existís, que puedo compartir mis días con vos y que hay una personita que consigue hacerme sentir tantas cosas lindas sin siquiera intentarlo.

No necesito que todo sea perfecto. No necesito los días más increíbles ni las palabras más bonitas. Porque muchas veces, las cosas más simples son las que más significan cuando vienen de alguien especial.

Y vos sos especial para mí.

Quiero seguir creando recuerdos con vos, compartir risas, acompañarte cuando las cosas no salgan bien y celebrar cada pequeña alegría que llegue a tu vida.

Ojalá nunca te olvides de lo mucho que valés, de lo hermosa que es tu forma de ser y de lo importante que sos para mí.

Si pudiera regalarte algo, sería la oportunidad de verte a través de mis ojos por un instante, para que entendieras por qué te quiero tanto.

Gracias por ser vos, por existir y por formar parte de mi historia.

No sé qué nos espera más adelante, pero sí sé que hoy me hace feliz tenerte en mi vida.

Y si pudiera volver al principio, sabiendo todo lo lindo que iba a sentir por vos...

te volvería a elegir. ♡`;


// Crear corazones flotantes

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("heart-particle");

    const symbols = ["♡", "♥", "୨୧", "✧", "❤"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}


// Escritura progresiva

function typeMessage() {
    clearInterval(typingTimer);

    letterText.textContent = "";

    let index = 0;

    typingTimer = setInterval(() => {
        letterText.textContent += message.charAt(index);

        index++;

        if (index >= message.length) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
    }, 35);
}


// Abrir carta

function openLetter() {
    if (opened) return;

    opened = true;

    envelopeWrapper.classList.add("opened");

    tapHint.textContent = "Preparé esto especialmente para vosh ♡";

    setTimeout(() => {
        welcome.style.display = "none";

        loveLetter.classList.add("visible");

        typeMessage();

        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 1000);
}


// Volver a empezar

function restartExperience() {
    opened = false;

    clearInterval(typingTimer);
    typingTimer = null;

    envelopeWrapper.classList.remove("opened");

    loveLetter.classList.remove("visible");

    letterText.textContent = "";

    tapHint.textContent = "Tocá la cartita, mi niña ♡";

    welcome.style.display = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Eventos

envelopeWrapper.addEventListener("click", openLetter);

restartButton.addEventListener("click", restartExperience);


// Iniciar corazones

for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 400);
}

heartTimer = setInterval(createHeart, 650);
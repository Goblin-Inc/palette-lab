const generateBtn = document.getElementById("generateBtn");
const cards = document.querySelectorAll(".color-card");

function randomColor() {

    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

generateBtn.addEventListener("click", () => {
    
    updateCards();

})

function updateCards() {

    cards.forEach(card => {

        const color = randomColor();

        const preview = card.querySelector(".color-preview");
        const hexText = card.querySelector(".color-info p");
        const copyText = card.querySelector(".color-info h3");

        preview.style.backgroundColor = color;
        hexText.textContent = color;

        card.onclick = () => {

            navigator.clipboard.writeText(hexText.textContent);

            copyText.textContent = "✔ Copied!";

            setTimeout(() => {

                copyText.textContent = "Click to copy";

            }, 1000);

        };

    });

}

updateCards();
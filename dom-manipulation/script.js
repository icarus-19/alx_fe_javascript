const randomness=['The price of discipline is always less than the pain of regret. - Nido Qubein',
    'Nothing is more exhausting than the task that’s never started.–GRETCHEN RUBIN',
    "With an obedient and disciplined brain a man live always right up to the standard of his best moments. - Arnold Bennett, The Human Machine"
]

const quoteDisplay= document.getElementById("quoteDisplay")

function showRandomQuote(){
    quoteDisplay.innerHTML=""
    let index= Math.floor(Math.random()*randomness.length)
    let p =document.createElement("p")
    p.textContent=randomness[index]
    quoteDisplay.appendChild(p)
}

const newQuote= document.getElementById("newQuote")

newQuote.addEventListener("click",showRandomQuote)
import { chars } from "./data/characters.js";

const app = document.getElementById("app");

function render(chars) {
app.innerHTML = `
  <div class="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg">

    <h1 class="text-2xl font-bold mb-4">${chars.nome}</h1>

    <h2 class="font-semibold mt-4">Lore</h2>
    <p class="text-gray-300">${chars.lore}</p>

    <h2 class="font-semibold mt-4">Poderes</h2>
    <ul class="list-disc ml-5">
      ${chars.powers.map(p => `<li>${p}</li>`).join("")}
    </ul>

    <h2 class="font-semibold mt-4">Aparições</h2>
    <ul class="list-disc ml-5">
      ${chars.apparitions.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <img src="${chars.image}" 
      class="mt-6 rounded-lg shadow-md w-full object-cover">
  
  </div>
`;
}

// Implementação da renderização da home page...

let statPage = "home"

function nav(page) {
  statPage = page

  if (page === "home") {
    renderHome()
  }

  if (page === "monsters") {
    renderMenu()
    render(statChar)
  }

  if (page === "movies") {
    renderMovies()
  }
}

function renderHome() {
  menu.innerHTML = ""
  app.innerHTML = ""
}

// Implementação dos enventos da navbar...

document.getElementById("navHome").addEventListener("click", () => {
  nav("home")
});

document.getElementById("navMonsters").addEventListener("click", () => {
  nav("monsters")
});

document.getElementById("navMovies").addEventListener("click", () => {
  nav("movies")
});

// Implementação do menu de alteração de personagens...

let statChar = chars[0]
const menu = document.getElementById('menu')
const btnMonst = document.getElementById("navMonsters")

btnMonst.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
})

function renderMenu() {
  menu.innerHTML = ""

  chars.forEach((char, index) => {
    const btn = document.createElement("button")
    btn.textContent = char.btn_nome
    btn.className = `
      px-4 py-2 
      bg-gray-800 
      rounded-lg 
      hover:bg-gray-900 
      transition 
      text-sm
    `
    btn.addEventListener("click", () => {
      selectChar(index)
      menu.classList.add("hidden")
    })
    menu.appendChild(btn)
  })
}

function selectChar(index) {
  statChar = chars[index]
  render(statChar)
}

// Render dos Filmes provisorio...

function renderMovies() {
  menu.innerHTML = ""
  app.innerHTML = `
    <h1 class="text-2xl">Filmes</h1>
    <p class="text-gray-400 mt-2">
      Em breve: lista de filmes do universo Godzilla.
    </p>
  `
}

nav("home")


// Implementação do Carrossel de Imagens da Tela Inicial...

const imgs = ['assets/imgs/cr1.jpg', 'assets/imgs/cr2.jpg']

let index = 0
let interval = setInterval(next, 3000)

function showImage() {
    document.getElementById("carrossel").src = imgs[index]
  }

function resetAutoPlay() {
  clearInterval(interval)
  interval = setInterval(next, 4500)
}

function next() {
  index = (index + 1) % imgs.length
  showImage()
  resetAutoPlay()
}

function prev() {
  index = (index - 1 + imgs.length) % imgs.length
  showImage()
  resetAutoPlay()
}
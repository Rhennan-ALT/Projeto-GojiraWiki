import { chars } from "./data/characters.js";

const app = document.getElementById("app");

function render(chars) {
  app.innerHTML = `
    <h1><strong>${chars.nome}</strong></h1>
    <br>
    
    <h2> <strong>Lore</strong></h2>
    <p>${chars.lore}</p>
    
    <br>
    <h2> <strong>Poderes</strong></h2>
    
    <ul>
        ${chars.powers.map(p => `<li>${p}</li>`).join("")}
    </ul>
    
    <br>
    <h2><strong>Aparições</strong></h2>
    
    <ul>
        ${chars.apparitions.map(a=> `<li>${a}</li>`).join("")}
    </ul>
    
    <br>
    <img src="${chars.image}" class="w-full rounded-lg shadow-md">
  `;
}

// Implementação do menu de alteração de personagens...

let statChar = chars[0]
const menu = document.getElementById('menu')

function renderMenu(){
  menu.innerHTML = ""

  chars.forEach((char, index)=>{
    const btn = document.createElement("button")
    btn.textContent = char.nome
    btn.className = "px-3 py-1 bg-gray-700 rounded hover:bg-gray-500"

    btn.addEventListener("click", ()=>{
      selectChar(index)
    })
    menu.appendChild(btn)
  })
}

function selectChar(index){
  statChar = chars[index]
  render(statChar)
}

renderMenu()
render(statChar)


// Implementação do Carrossel de Imagens da Tela Inicial...

const imgs = ['assets/imgs/cr1.jpg', 'assets/imgs/cr2.jpg', 'assets/imgs/cr3.jpeg',]

let index = 0
let interval = setInterval(next, 3000);

function showImage() {
    document.getElementById("carrossel").src = imgs[index];
  }

function resetAutoPlay() {
  clearInterval(interval);
  interval = setInterval(next, 4500);
}

function next() {
  index = (index + 1) % imgs.length;
  showImage();
  resetAutoPlay();
}

function prev() {
  index = (index - 1 + imgs.length) % imgs.length;
  showImage();
  resetAutoPlay();
}

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const header = document.querySelector('h1')
const btn = document.querySelector('button')
const pi1 = document.querySelector('.pi1')
const pi2 = document.querySelector('.pi2')


let player1 = prompt(`Birinchi o'yinchi ismini kirting`)
let player2 = prompt(`Ikkinchi o'yinchi ismini kirting`)

pi1.textContent = `${player1}`
pi2.textContent = `${player2}`

btn.addEventListener('click', function(){

    const random1 = Math.floor(Math.random() * 6) + 1
    const random2 = Math.floor(Math.random() * 6) + 1
    const random3 = Math.floor(Math.random() * 3) + 1
    
    let audi = new Audio(`./audio/dice1.mp3`)
    audi.play()
    img1.setAttribute('src', `images/dice${random1}.png`)
    img2.setAttribute('src', `images/dice${random2}.png`)
    
    
    
    if (random1 > random2){
        header.textContent = `${player1} g'olib bo'ldi`
        pi1.style.color = 'rgb(40, 82, 40)'
        pi2.style.color = 'rgb(172, 41, 41)'
        pi1.textContent = `${player1} 👍`
        pi2.textContent = `${player2} 👎`
    }
    else if (random1 == random2) {
        header.textContent = `Durrang 🤝`
        pi1.style.color = '#4ECCA3'
        pi2.style.color = '#4ECCA3'
        pi1.textContent = `${player1} `
        pi2.textContent = `${player2} `

    }
    else {
        header.textContent = `${player2} g'olib bo'ldi`
        pi2.style.color = 'rgb(40, 82, 40)'
        pi1.style.color = 'rgb(172, 41, 41)'
        pi2.textContent = `${player2} 👍`
        pi1.textContent = `${player1} 👎`
    }
    
    
})












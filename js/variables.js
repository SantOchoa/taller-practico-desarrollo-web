let table = document.getElementById('table')
let cartsArray = []

const randomNumbers = (size)=> {
    let order =[]
    let num = 0
    while(num <size){
        let randNum = Math.floor(Math.random() * 50) + 1
        if (!order.includes(randNum)) {
            order.push(randNum)
            num++;
        }
    }
    return order
}
const ramdomNumbercopy = (array)=>{
   return array.slice().sort(() => Math.random() - 0.5);
   
}

document.addEventListener('DOMContentLoaded', () => {
    
   if (window.location.href.includes('game_4x4.html')) {
      let randomNumbers1 = randomNumbers(8)
      let randomNumbers2 = ramdomNumbercopy(randomNumbers1)
      for (let i = 0; i < 8; i++) {
         const cart1 = document.createElement('div')
         const cart2 = document.createElement('div')
         cart1.className = `carts cart${randomNumbers1[i]}`
         cart1.tagName = 'jajaj'
         cart2.className = `carts cart${randomNumbers2[i]}`
         cart2.tagName = 'jajaj'
         table.appendChild(cart2)            
         table.appendChild(cart1)
      }
   }
   else if (window.location.href.includes('game_6x6.html')) {
      let randomNumbers1 = randomNumbers(18)
      let randomNumbers2 = ramdomNumbercopy(randomNumbers1)
      for (let i = 0; i < 18; i++) {
         const cart1 = document.createElement('div')
         const cart2 = document.createElement('div')
         cart1.className = `carts cart${randomNumbers1[i]}`
         cart1.tagName = 'jajaj'
         cart2.className = `carts cart${randomNumbers2[i]}`
         cart2.tagName = 'jajaj'
         table.appendChild(cart2)            
         table.appendChild(cart1)
      }
   }
   else if (window.location.href.includes('game_10x10.html')) {
      let randomNumbers1 = randomNumbers(50)
      let randomNumbers2 = ramdomNumbercopy(randomNumbers1)
      for (let i = 0; i < 50; i++) {
         
      }
   }
})
let table = document.getElementById('table')

const listimages = (num)=>{
   if (num ==1){
      return ['images/anciano-en-pena.jpg',1]
   }
   if (num ==2){
      return ['images/autoretrato-fondo-azul.jpg',2]
   }
   if (num ==3){
      return ['images/autoretrato-fondo-oscuro.jpg',3]
   }
   if (num ==4){
      return ['images/autoretrato-oreja-cortada.jpg',4]
   }
   if (num ==5){
      return ['images/cabeza-de-esqueleto-con-cigarro.jpg',5]  
   }
   if (num ==6){
      return ['images/cartero-Roulin.jpg',6]
   }
   if (num ==7){
      return ['images/jarron-con-girasoles.jpg',7]
   }
   if (num ==8){
      return ['images/jorron-con-lirios.jpg',8]
   }
   if (num ==9){
      return ['images/silla-de-Van-Gogh.jpg',9]
   }
   if (num ==10){
      return ['images/vista-a-Santa-marie.jpg',10]
   }
   if (num ==11){
      return ['images/image11.jpg',11]
   }
   if (num ==12){
      return ['images/image12.jpg',12]
   }
   if (num == 13){
      return ['images/image13.jpg',13]
   }
   if (num == 14){
      return ['images/image14.jpg',14]
   }
   if (num == 15){
      return ['images/image15.jpg',15]
   }
   if (num == 16){
      return ['images/image16.jpg',16]
   }
   if (num == 17){
      return ['images/image17.jpg',17]
   }
   if (num == 18){
      return ['images/image18.jpg',18]
   }
   if (num == 19){
      return ['images/image19.jpg',19]
   }
   if (num == 20){
      return ['images/image20.jpg',20]
   }
   if (num == 21){
      return ['images/image21.jpg',21]
   }
   if (num == 22){
      return ['images/image22.jpg',22]
   }
   if (num == 23){
      return ['images/image23.jpg',23]
   }
   if (num == 24){
      return ['images/image24.jpeg',24]
   }
   if (num == 25){
      return ['images/image25.jpg',25]
   }
   if (num == 26){
      return ['images/image26.jpg',26]
   }
   if (num == 27){
      return ['images/image27.jpg',27]
   }
   if (num == 28){
      return ['images/image28.jpg',28]
   }
   if (num == 29){
      return ['images/image29.jpg',29]
   }
   if (num == 30){
      return ['images/image30.jpg',30]
   }
   if (num == 31){
      return ['images/image31.jpg',31]
   }
   if (num == 32){
      return ['images/image32.jpg',32]
   }
   if (num == 33){
      return ['images/image33.jpg',33]
   }
   if (num == 34){
      return ['images/image34.jpg',34]
   }
   if (num == 35){
      return ['images/image35.jpg',35]
   }
   if (num == 36){
      return ['images/image36.jpg',36]
   }
   if (num == 37){
      return ['images/image37.jpg',37]
   }
   if (num == 38){
      return ['images/image38.jpg',38]
   }
   if (num == 39){
      return ['images/image39.jpg',39]
   }
   if (num == 40){
      return ['images/image40.jpg',40]
   }
   if (num == 41){
      return ['images/image41.jpg',41]
   }
   if (num == 42){
      return ['images/image42.jpg',42]
   }
   if (num == 43){
      return ['images/image43.jpg',43]
   }
   if (num == 44){
      return ['images/image44.jpg',44]
   }
   if (num == 45){
      return ['images/image45.jpeg',45]
   }
   if (num == 46){
      return ['images/image46.jpg',46]
   }
   if (num == 47){
      return ['images/image47.jpg',47]
   }
   if (num == 48){
      return ['images/image48.jpg',48]
   }
   if (num == 49){
      return ['images/image49.jpeg',49]
   }
   if (num == 50){
      return ['images/image50.jpg',50]
   }

}


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
         const num1 = listimages(randomNumbers1[i])
         const num2 = listimages(randomNumbers2[i])
         cart1.className = 'cart'
         cart1.id = `cart${num1[1]}`
         cart1.style.backgroundImage= `url(${num1[0]})`
         cart2.className = 'cart'
         cart2.id = `cart${num2[1]}`
         cart2.style.backgroundImage= `url(${num2[0]})`
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
         const num1 = listimages(randomNumbers1[i])
         const num2 = listimages(randomNumbers2[i])
         cart1.className = 'cart'
         cart1.id = `cart${num1[1]}`
         cart1.style.backgroundImage= `url(${num1[0]})`
         cart2.className = 'cart'
         cart2.id = `cart${num2[1]}`
         cart2.style.backgroundImage= `url(${num2[0]})`
         table.appendChild(cart2)            
         table.appendChild(cart1)
      }
   }
   else if (window.location.href.includes('game_10x10.html')) {
      let randomNumbers1 = randomNumbers(50)
      let randomNumbers2 = ramdomNumbercopy(randomNumbers1)
      for (let i = 0; i < 50; i++) {
         const cart1 = document.createElement('div')
         const cart2 = document.createElement('div')
         const num1 = listimages(randomNumbers1[i])
         const num2 = listimages(randomNumbers2[i])
         cart1.className = 'cart'
         cart1.id = `cart${num1[1]}`
         cart1.style.backgroundImage= `url(${num1[0]})`
         cart2.className = 'cart'
         cart2.id = `cart${num2[1]}`
         cart2.style.backgroundImage= `url(${num2[0]})`
         table.appendChild(cart2)            
         table.appendChild(cart1)
      }
   }
})
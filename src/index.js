// format for having show burger names- const al items
const restaurantMenuDivElement = document.getElementById('restaurant-menu')
const burgerImageElement = document.getElementById('image')
const burgerNameElement = document.getElementById('name')
const burgerNumberInCartElement = document.getElementById('number-in-cart-count')

// get means fetch
fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => {
    //displayBurgerDetails(burgers[0]) //- only to respond to display the first pic

    burgers.forEach(burger => {
        addBurgerNameToRestaurantMenu(burger)
    })
})
//Deliverable #1 spanElement & AppendChild

function addBurgerNameToRestaurantMenu(burger){
   const spanElement = document.createElement('span')
   spanElement.textContent = burger.name
   restaurantMenuDivElement.appendChild(spanElement)
   
   // Deliverable #2 (when you click the images it displays)
spanElement.addEventListener('click', () => {
    displayBurgerDetails(burger)
    })

}
// display burger 
function displayBurgerDetails(burger){ 
    burgerImageElement.src = burger.image
    burgerNameElement.textContent = burger.name
    burgerNumberInCartElement.textContent = burger.number_in_cart
    
    
}
const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const numberToAddInputElement = document.getElementById('number-to-add')
   
    const sum = Number(burgerNumberInCartElement.textContent)+ Number(numberToAddInputElement.value)
    burgerNumberInCartElement.textContent = sum
    console.log(burgerNumberInCartElement)
})


shoppingList = []

shoppingList=['Milk','Bread','Apples']

shoppingList.splice(1,1,"Bananans", "Eggs")

console.log(shoppingList)

console.log(shoppingList.pop())

shoppingList.sort()

console.log(shoppingList.indexOf('Milk'))

console.log(shoppingList)

shoppingList.splice(1,0,"Carrots", "Lettuce")
console.log(shoppingList)

newList = ['Juice','Pop']

shoppingList = shoppingList.concat(newList).concat(newList)

console.log(shoppingList.lastIndexOf('Pop'))

console.log(shoppingList)



arr = [1,2,3]

twoDarr = [arr, arr, arr]

console.log(twoDarr[1][1] === twoDarr[0][1])



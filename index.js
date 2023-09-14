// Write your solution here!
const cats = [
  
  "Milo", 
  "Otis", 
  "Garfield"
  
];
console.log(cats)

function  destructivelyAppendCat(name){
cats.push("Ralph")
return cats}

function  destructivelyPrependCat(name){
  cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()

}

function appendCat(name){
  const newCat= [...cats, "Broom"];
  return newCat;
}

function  prependCat(name){
  const allCats= ["Arnold", ...cats]
  return allCats;
}

function removeLastCat(){
  const copyOfCats= cats.slice(0,cats.length-1)
  return copyOfCats
}
function removeFirstCat(){
  const newCatsCopy= cats.slice(1) 
  return newCatsCopy;
}  


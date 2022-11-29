const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
const copyOfcat = cats.slice();
copyOfcat.push(name);
return copyOfcat;
}
function prependCat(name){
    const copyOfcat =cats.slice()
    copyOfcat.unshift(name);
    return copyOfcat
}
function removeLastCat(){
    const copyOfcat = cats.slice();
   copyOfcat.pop();
   return copyOfcat
}
function removeFirstCat(name){
    const copyOfcat = cats.slice();
   copyOfcat.shift(name);
   return copyOfcat
}
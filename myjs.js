
function metTofoot(number){
    // let inputN = document.getElementById("inputN").value;
    // let foot= inputN/0.305;
    return number/0.305;
  }
function footTomet(number){
    // let inputN = document.getElementById("inputN").value;
    // let met = inputN/3.279;
    return number/3.279;
}
function changeTemMet(){
    let inputN= document.getElementById("inputN").value;
    let foot = inputN + " - Met = "+ metTofoot(inputN) + " - Feet"
    document.getElementById("result").innerHTML =foot;
}
function changeTemFeet(){
    let inputN = document.getElementById("inputN").value;
    let met = inputN + " - Feet ="+ footTomet(inputN) + " - Met"
    document.getElementById("result").innerHTML=met;
}

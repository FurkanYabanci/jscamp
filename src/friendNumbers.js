function getNumber(number) {
    let holdDividing = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            holdDividing.push(i)
        }
    }
    return holdDividing
}
function findFriends(number1,number2) {
    let firstNumberDividing = getNumber(number1)
    let secondNumberDividing = getNumber(number2)
  
    let firstSumDividing = firstNumberDividing.reduce((acc,p) => acc+p,0)
    let secondSumDividing = secondNumberDividing.reduce((acc,p) => acc+p,0)
 
    if(number1 == secondSumDividing && number2 == firstSumDividing){
        console.log(number1+" ve "+number2+" arkadaş sayılardır")
 }
 else{
     console.log(number1+" ve "+number2+" arkadaş sayı değillerdir")
 }
}
findFriends(6232, 6368)


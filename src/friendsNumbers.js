
let getNumbers = (number) => {
    let holdDividing = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            holdDividing.push(i)
        }
    }
    return holdDividing
}
let findFriends = (number1,number2) => {
   let firstNumberDividing = getNumbers(number1)
   let secondNumberDividing = getNumbers(number2)
 
   let firstSumDividing = firstNumberDividing.reduce((acc,p) => acc+p,0)
   let secondSumDividing = secondNumberDividing.reduce((acc,p) => acc+p,0)

   if(number1 == secondSumDividing && number2 == firstSumDividing){
       console.log("Sayılar arkadaş sayılardır")
}
else{
    console.log("Arkadaş sayı değillerdir")
}
}
findFriends(6232, 6368)


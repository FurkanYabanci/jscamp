
let isPrime = false
function prime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 2) {
            console.log( numbers[i]  +" --> 2 den büyük sayı giriniz")
        }
        else if (numbers[i] == 2) {
            console.log(numbers[i] + " asal sayıdır")
        }
        else {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    isPrime = false
                    break
                }   
                else{
                    isPrime = true
                }
            }
                if (isPrime == true) {
                    console.log(numbers[i] + " asal sayıdır.")
                }
                else {
                    console.log(numbers[i] + " asal sayı değildir.")
                }
        }
    }
}

prime(-23, 23, 37, 40,99,101,103,107,241,1)
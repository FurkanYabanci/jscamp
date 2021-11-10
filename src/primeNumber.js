let isPrime = true
function findPrime(...numbers) {
    numbers.map(number => {
        if (number < 2) {
            console.log(number + " --> 2 den büyük sayı giriniz")
        }
        else if (number == 2) {
            console.log(number + " asal sayıdır")
        }
        else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false
                    break
                } else {
                    isPrime = true
                }
            }
            if (isPrime == true) {
                console.log(number + " asal sayıdır.")
            }
            else {
                console.log(number + " asal sayı değildir.")
            } 
        }
    }
    )
}

findPrime(-23, 23, 37, 60, 99, 101, 103, 107, 241, 1, 2, 3, 4)
let isPrime = true
function findPrime() {
    for (let i = 2; i < 1000; i++) {  
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                isPrime = false
                break
            }else{
                isPrime = true
            }
        }
        if(isPrime == true){
            console.log(i + "sayısı asaldır")
        }            
    }
}
findPrime()
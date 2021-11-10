function findPerfect() { 
    for (let i = 2; i < 1000; i++) {
        let tot = 0   
        for (let j = 1; j < i; j++) {
            if(i % j == 0){
                total = total + j
            }
        }
        if(i == total){
            console.log(i+" sayısı mükemmel sayıdır")
        }
    }
}
findPerfect()
function findPerfect() { 
    for (let i = 2; i < 1000; i++) {
        let total = 0   
        for (let j = 1; j < i; j++) {
            if(i % j == 0){
                total = total + j
            }
        }
        if(i == total){
            console.log(i+" sayisi mükemmel sayidir")
        }
    }
}
findPerfect()

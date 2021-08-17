
function sumOdds(n){
    return [...Array(n+1).keys()].reduce((a, b)=>{
        return a + (b % 2 === 1 ? b : 0);
    });
}
console.log(sumOdds(11))


function sumOdds(n){
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum+= i % 2 == 1 ? i : 0 ;
    }
    return sum;
}
console.log(sumOdds(5));
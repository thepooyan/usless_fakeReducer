

let arry = [2,4,3,2,5,9];

function reduceArry(arry, func) {
    let prev = arry[0];

    for (let i=1; i < arry.length; i++) {
        prev = func(prev, arry[i]);
    }
    return prev
}


let res = reduceArry(arry, (p, c) => {
    return p + c;
});
console.log(res);
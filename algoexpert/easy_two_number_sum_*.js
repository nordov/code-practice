function twoNumberSum(arr, target){

    let result = [];

    for(let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                result.push(arr[i]);
                result.push(arr[j]);
                continue;
            }
        }

    return result;
}

let arr = [3,5,-4,8,11,1,-1,6];
let target = 10;

//twoNumberSum(arr, target);
console.log(twoNumberSum(arr, target));
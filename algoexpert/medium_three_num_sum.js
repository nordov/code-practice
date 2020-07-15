function threeNumberSum(array, targetSum) {
let nums = [...array].sort((a,b)=>a-b);
let triplets = [];

for (let i = 0; i<nums.length; i++)
    for (let j = i+1; j < nums.length; j++){
        let potential = 0 - nums[1] - nums [j]
        for (let k = j+1; k < nums.length; k++)
            if (potential === nums[k])
                triplets.push([nums[i], nums[j], nums[k]]);
    }

return triplets;

}

let array = [12,3,1,2,-6,5,-8,6];
let target = 0;

console.log(threeNumberSum(array, target));
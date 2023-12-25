function twoSum(nums, target) {
    const numIndicesMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndicesMap.hasOwnProperty(complement)) {
            return [numIndicesMap[complement], i];
        }

        numIndicesMap[nums[i]] = i;
    }

    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result);  

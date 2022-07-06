var fourSum = function (nums, target) {

    nums.sort((a, b) => a - b);
    const size = nums.length;
    let res = [];

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            let left = j + 1;
            let right = size - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum > target) {
                    right--
                } else if (sum < target) {
                    left++;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    const leftValue = nums[left];
                    while (left < size && nums[left] === leftValue) {
                        left++;
                    }

                    const rightValue = nums[right]
                    while (right > left && nums[right] === rightValue) {
                        right--;
                    }
                }
            }
            while (j < size && nums[j + 1] === nums[j]) {
                j++;
            }
        }

        while (i < size && nums[i + 1] === nums[i]) {
            i++;
        }
    }
    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));

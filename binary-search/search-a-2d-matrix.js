/** https://leetcode.com/problems/search-a-2d-matrix/ */

var searchMatrix = function(matrix, target) {
    // 1. найти строчку в матрице
    // 2. найти позицию в строчке

    let left = 0;
    let right = matrix.length - 1;
    let mid;

    if (!right) {
        mid = 0;
    } else {
        while (left < right) {
            mid = Math.round((right - left) / 2) + left;

            if (target >= matrix[mid][0]) {
                left = mid; 
            }

            if (target <= matrix[mid][matrix[mid].length - 1]) {
                right = mid;
            }

            if ((right - left) === 1) {
                if (target >= matrix[right][0]) {
                    mid = right;
                } else {
                    mid = left;
                }
                break;
            }
        }
    }

    const row = matrix[mid];;

    left = 0;
    right = row.length - 1;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if (row[mid] === target) {
            return true;
        } else if (row[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

console.log(searchMatrix(matrix, 6) === false );
console.log(searchMatrix(matrix, 16) === true);
console.log(searchMatrix(matrix, 23) === true);
console.log(searchMatrix([[1],[3],[5]], 3) === true)
console.log(searchMatrix([[-10],[-7],[-5]], -10) === true)

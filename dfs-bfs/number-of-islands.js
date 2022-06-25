/** https://leetcode.com/problems/number-of-islands/ */
var numIslands = function (grid) {
    const gridLength = grid.length;
    const rowLength = grid[0].length;

    const dfs = (i, j) => {
        if (grid[i][j] === '1') {
            grid[i][j] = '0'
            if (i - 1 >= 0) dfs(i - 1, j)
            if (j + 1 < rowLength) dfs(i, j + 1)
            if (i + 1 < gridLength) dfs(i + 1, j)
            if (j - 1 >= 0) dfs(i, j - 1)
        }
    }

    let count = 0;

    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < rowLength; j++) {

            if (grid[i][j] === '1') {
                // если нашли место с землей, метим все соседние ячейки
                dfs(i, j);
                count++
            }
        }

    }

    return count;
};

const grid1 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(numIslands(grid1) === 3);

const grid2 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

console.log(numIslands(grid2) === 1);



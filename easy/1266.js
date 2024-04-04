/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    if (points.length <=1 ) {
        return 0;
    }

    let lastPoint = points[0];
    let res = 0;

    for (let i = 1; i < points.length; i++) {
        const point = points[i];

        console.log('d', Math.max(Math.abs(lastPoint[0] - point[0]), Math.abs(lastPoint[1] - point[1])));

        console.log('x', Math.abs(lastPoint[0] - point[0]),Math.abs(lastPoint[1] - point[1]) )

        res += Math.max(Math.abs(lastPoint[0] - point[0]), Math.abs(lastPoint[1] - point[1]))

        lastPoint = point;
    }

    return res;
};

// console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]));
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));



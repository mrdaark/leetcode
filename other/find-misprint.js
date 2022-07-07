const calc = (source, target) => {

    const dist = new Array(source.length + 1);

    for (let i = 0; i <= source.length; i++) {
        dist[i] = new Array(target.length + 1);
    }

    for (let i = 0; i <= source.length; i++) {
        for (let j = 0; j <= target.length; j++) {

            if (i === 0 && j === 0) {
                dist[i][j] = 0;
            } else if (i === 0 && j > 0) {
                dist[i][j] = j;
            } else if (j === 0 && i > 0) {
                dist[i][j] = i;
            } else {
                dist[i][j] = Math.min(
                    dist[i][j - 1] + 1,
                    dist[i - 1][j] + 1,
                    dist[i - 1][j - 1] + (source[i - 1] == target[j - 1] ? 0 : 1),
                );
            }

        }
    }

    return dist[source.length][target.length];
}

console.log(calc('cat', 'tcassss'));

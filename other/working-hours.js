const workingHours = (arrs, workHours) => {
    const restHours = new Set();
    for (let i = 0; i < arrs.length; i++) {
        for (let j = arrs[i][0]; j < arrs[i][1]; j++) {
            restHours.add(j);
        }

    }

    let periods = [];
    let start = workHours[0];

    for (let i = workHours[0]; i <= workHours[1]; i++) {
        if (!restHours.has(i)) {
            periods.push(i);
        }
    }



    // let periods = [];

    // for (let i = workHours[0]; i <= workHours[1]; i++) {
    //     periods.push(i);
    // }

    // for (let i = 0; i < arrs.length; i++) {
    //     let temp = [];

    //     for (let j = 0; j < periods.length; j++) {

    //         if (periods[j] < arrs[i][0] || periods[j] >= arrs[i][1]) {
    //             temp.push(periods[j]);
    //         }
    //     }
    //     periods = temp;
    // }

    // let res = [];
    // let start = periods[0];
    // let prev = start;

    for (let i = 1; i < periods.length; i++) {
        if (periods[i] !== prev + 1 || i === periods.length - 1) {
            res.push([start, prev + 1]);
            start = periods[i];
        }
        prev = periods[i];
    }

    return res;
}


console.log(workingHours([[9, 10], [15, 17], [14, 16]], [9, 18]));

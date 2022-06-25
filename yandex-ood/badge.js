    // const badge = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     fullName: `${lastName} ${firstName}`,

    //     set fullName(value) {
    //         const t = value.split(' ');

    //         if (t.length !== 2) {
    //             return;
    //         }
    //         this.lastName = t[0];
    //         this.firstName = t[1];
    //     }
    // }

var f = function (firstName, lastName) {

    const badge = {
        firstName,
        lastName,
    };

    Object.defineProperty(badge, 'fullName', {

        get: function () {
            return this.firstName + ' ' + this.lastName;
        },

        set: function (value) {
            if (!value) {
                return;
            }
            const split = value.match(/(.*)\s(.*)/);
            if (split.length != 3) {
                return;
            }
            this.firstName = split[1];
            this.lastName = split[2];
        }
    });

    return badge;
}


const x = f('zxx', 'zzz');

console.log(x, x.fullName);

x.fullName = 'asda asda';


console.log(x, x.fullName);

const getTrace = (tickets) => {


    const hashFrom = new Map();
    const hashTo = new Map();

    for (let i = 0; i < tikets.length; i++) {
        hashFrom.set(tikets[i].from, tikets[i]);
        hashTo.set(tikets[i].to, tikets[i]);
    }

    const res = [];
    let ticket;

    for (let tiket of hashFrom.keys()) {
        if (!hashTo.has(tiket)) {
            ticket = hashFrom.get(tiket);
            break;
        }
    }

    while (ticket) {
        res.push(ticket);
        ticket = hashFrom.get(ticket.to);
    }

    return res;
}

const tikets = [
    {from: 'С.Петербург', to: 'Минск'},
    {from: 'Киев', to: 'Новосибирск'},
    {from: 'Череповец', to: 'Москва'},
    {from: 'Минск', to: 'Киев'},
    {from: 'Москва', to: 'С.Петербург'},
];

console.log(getTrace(tikets));

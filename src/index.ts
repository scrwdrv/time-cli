#!/usr/bin/env node
const epoch = parseInt(process.argv[2]);

if (epoch) parseEpoch(epoch);
else console.log(Date.now());

function parseEpoch(epoch: number) {

    let seconds = Math.floor((Date.now() - epoch) / 1000),
        future = false;

    if (seconds < 0) seconds = - seconds, future = true;

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return print('year');

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return print('month');

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return print('day');

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return print('hour');

    interval = Math.floor(seconds / 60);
    if (interval > 1) return print('minute');

    interval = seconds;
    return print('second');

    function print(unit: string) {
        console.log(new Date(epoch).toLocaleString());
        console.log('# ' + interval + ' ' + unit + (interval > 1 ? 's' : '') + (future ? ' from now' : ' ago'));
    }
}
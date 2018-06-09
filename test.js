require('./index.js');


const test = new Promise((resolve, reject) => {
    resolve('Test');
});

test
    .then(() => console.log('resolve'))
    .catch(() => console.error('reject'));
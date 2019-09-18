const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

writer = csvWriter();

// const { Client } = require('pg');
// const client = new Client();
// await client.connect();

const ratPoint = 1000000;
const lisPoint = 1000000;
const userInfoPoint = 10000000;
const transPoint = 10000000;
const resPoint = 10000000;

async function generate() {
    console.time('time');
    writer.pipe(fs.createWriteStream('postgresrating.csv'));
    for (let i = 1; i <= ratPoint; i++) {
        const id = i;
        const rating = faker.random.number({min: 0, max: 5});
        const numberOfRatings = faker.random.number;

        console.log('rating: ' + i);

        const ratReady = writer.write({
            id,
            rating,
            numberOfRatings
        });

        if (!ratReady) {
            await new Promise((resolve) => {
                writer.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };

    writer.pipe(fs.createWriteStream('postgreslisting.csv'));
    for (let i = 1; i <= lisPoint; i++) {
        const id = i;
        const maxGuests = faker.random.number({min: 0, max: 10});
        const maxInfants = faker.random.number({min: 0, max: 5});
        const chargePerNight = faker.random.number();
        const cleaningFee = faker.random.number();
        const serviceFee = faker.random.number();
        const occupancyFee = faker.random.number();

        console.log('list:' + i);
        const lisReady = writer.write({
            id,
            maxGuests,
            maxInfants,
            chargePerNight,
            cleaningFee,
            serviceFee,
            occupancyFee
        });
        if (!lisReady) {
            await new Promise((resolve) => {
                writer.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };

    writer.pipe(fs.createWriteStream('postgresuserinfo.csv'));
    for (let i = 1; i <= userInfoPoint; i++) {
        const id = i;
        const username = faker.name.firstName();

        console.log('user: ' + i);

        const userInfoReady = writer.write({
            id,
            username
        });

        if (!userInfoReady) {
            await new Promise((resolve) => {
                writer.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };

    writer.pipe(fs.createWriteStream('postgrestransactions.csv'));
    for (let i = 1; i <= transPoint; i++) {
        const id = i;
        const userId = faker.random.number({min: 0, max: userInfoPoint});
        const payment = faker.random.number();

        console.log('transactions: ' + i);

        const transReady = writer.write({
            id,
            userId,
            payment
        });

        if (!transReady) {
            await new Promise((resolve) => {
                writer.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };

    writer.pipe(fs.createWriteStream('postgresreservations.csv'));
    for (let i = 1; i <= resPoint; i++) {
        const id = i;
        const listingId = faker.random.number({min: 1, max: lisPoint});
        const userId = faker.random.number({min: 0, max: userInfoPoint});
        const checkinDate = faker.date.past();
        const checkoutDate = faker.date.past();
        const transactionId = faker.random.number({min: 1, max: transPoint});
        const adult = faker.random.number({min: 0, max: 10});
        const children = faker.random.number({min: 0, max: 10});
        const infant = faker.random.number({min: 0, max: 10});

        console.log('res:' + i);
        const resReady = writer.write({
            id,
            listingId,
            userId,
            checkinDate,
            checkoutDate,
            transactionId,
            adult,
            children,
            infant,
        });
        if (!resReady) {
            await new Promise((resolve) => {
                writer.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };
    console.timeEnd('time');
    writer.end();
};
generate();
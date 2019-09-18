const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');

const writerRes = csvWriter();
const writerLis = csvWriter();

const lisPoint = 100;
const resPoint = Math.floor(lisPoint*10);

async function generate() {
    console.time('time');
    writerRes.pipe(fs.createWriteStream('mongoreservation.csv'));
    for (let i = 1; i <= resPoint; i++) {
        const id = i;
        const listingId = faker.random.number({min: 1, max: lisPoint});
        const username = faker.name.firstName();
        const checkinDate = faker.date.past();
        const checkoutDate = faker.date.past();
        const adult = faker.random.number({min: 0, max: 10});
        const children = faker.random.number({min: 0, max: 10});
        const infant = faker.random.number({min: 0, max: 10});
        const payment = faker.random.number();

        console.log('res:' + i);
        const resReady = writerRes.write({
            id,
            listingId,
            username,
            checkinDate,
            checkoutDate,
            adult,
            children,
            infant,
            payment
        });
        if (!resReady) {
            await new Promise((resolve) => {
                writerRes.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        };
    };
    writerRes.end();

    writerLis.pipe(fs.createWriteStream('mongolisting.csv'));
    for (let i = 1; i <= lisPoint; i++) {
        const id = i;
        const maxGuests = faker.random.number({min: 0, max: 10});
        const maxInfants = faker.random.number({min: 0, max: 5});
        const chargePerNight = faker.random.number();
        const cleaningFee = faker.random.number();
        const serviceFee = faker.random.number();
        const occupancyFee = faker.random.number();
        const rating = faker.random.number({min: 1, max: 5});
        const numberOfRatings = faker.random.number();

        console.log('list:' + i);
        const lisReady = writerLis.write({
            id,
            maxGuests,
            maxInfants,
            chargePerNight,
            cleaningFee,
            serviceFee,
            occupancyFee,
            rating,
            numberOfRatings
        });
        if (!lisReady) {
            await new Promise((resolve) => {
                writerLis.once('drain', resolve);
            })
                .catch((err) => {
                console.log(err);
                });
        }
    };
    console.timeEnd('time');
    writerLis.end();
};
generate();
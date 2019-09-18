const model = require('./index.js');
const faker = require('faker');

const resPoint = 10000000;
const lisPoint = Math.floor(resPoint/10);
let reservations = [];

model.db.once('open', () => {
    const deletePromises = [
      model.db.dropCollection('listing').catch(() => {
        // console.log('listing drop error')
      }),
      model.db.dropCollection('reservation').catch(() => {
        // console.log('reservation drop error')
      }),
    ];
  
    Promise.all(deletePromises).then(() => {
      let counter = 0;
      for (let i = 1; i <= resPoint; i++) {
        const reservation = {
            listingId: faker.random.number({min: 1, max: lisPoint}),
            username: faker.name.firstName(),
            checkinDate: faker.date.past(),
            checkoutDate: faker.date.past(),
            adult: faker.random.number({min: 0, max: 10}),
            children: faker.random.number({min: 0, max: 10}),
            infant: faker.random.number({min: 0, max: 10}),
            payment: faker.random.number(),
        };
        reservations.push(reservation);
        if (reservations.length === 1000) {
            model.Reservation.create(reservations);
            reservations = [];
        }
        counter++;
        console.log(counter);
      };

      return;
    }).then(() => {
      const listings = [];
      for (let i = 1; i <= lisPoint; i++) {
        // const listingRes = [];
        // for (let j = 0; j < reservations.length; j++) {
        //     if (reservations[j].listingId === i) {
        //       listingRes.push(reservations[j]);
        //     }
        // }
        const listing = {
            id: i,
            maxGuests: faker.random.number({min: 0, max: 10}),
            maxInfants: faker.random.number({min: 0, max: 5}),
            chargePerNight: faker.random.number(),
            cleaningFee: faker.random.number(),
            serviceFee: faker.random.number(),
            occupancyFee: faker.random.number(),
            rating: faker.random.number({min: 1, max: 5}),
            numberOfRatings: faker.random.number(),
            // reservations: listingRes,
        };
        listings.push(listing);
      }
      return model.Listing.create(listings);
    }).then(() => {
      console.log('Seeding Done');
      process.exit();
    });
  });
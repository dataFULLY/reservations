const flooredRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

const randomListingGenerator = () => {
  let cleaningFee = flooredRandomNumber(50);
  let serviceFee = flooredRandomNumber(25);
  let occupancyFee = flooredRandomNumber(20);

  return {
    maxGuests: flooredRandomNumber(10) + 1,
    maxInfants: flooredRandomNumber(5),
    chargePerNight: flooredRandomNumber(500) + 1,
    cleaningFee: cleaningFee ? cleaningFee : null,
    serviceFee: serviceFee ? serviceFee : null,
    occupancyFee: occupancyFee ? occupancyFee : null,
    rating: flooredRandomNumber(11),
    numberOfRatings: flooredRandomNumber(500) + 1,
  };
};

const randomBookingGenerator = (listingId) => {
  let dates = [];

  for (let j = 8; j < 11; j++) {
    for (let i = 1; i < 31; i++) {
      if (Math.random() > 0.5) {
        dates.push({
          year: 2019,
          month: j,
          date: i,
          listingId,
        });
      }
    }
    if (j === 9) {
      if (Math.random() > 0.5) {
        dates.push({
          year: 2019,
          month: 9,
          date: 31,
          listingId,
        });
      }
    }
  }

  return dates;
};

module.exports = {
  randomListingGenerator,
  randomBookingGenerator,
};
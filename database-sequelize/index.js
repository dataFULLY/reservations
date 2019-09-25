/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservations', 'root', '', { dialect: 'postgres' });

const Listing = sequelize.define('listing', {
  maxGuests: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  maxInfants: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  chargePerNight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cleaningFee: {
    type: Sequelize.INTEGER,
  },
  serviceFee: {
    type: Sequelize.INTEGER,
  },
  occupancyFee: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numberOfRatings: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const BookedDate = sequelize.define('bookeddate', {
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  month: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  listingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Listing,
      key: 'id',
    },
  },
});

module.exports = {
  sequelize,
  Listing,
  BookedDate,
};

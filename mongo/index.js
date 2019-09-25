const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/listings', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

const listingSchema = new mongoose.Schema({
  id: Number,
  maxGuests: Number,
  maxInfants: Number,
  chargePerNight: Number,
  cleaningFee: Number,
  serviceFee: Number,
  occupancyFee: Number,
  rating: Number,
  numberOfRatings: Number,
  reservations: Array
});

const resSchema = new mongoose.Schema({
    listingId: Number,
    username: String,
    checkinDate: Date,
    checkoutDate: Date,
    adult: Number,
    children: Number,
    infant: Number,
    payment: Number
});

const Listing = mongoose.model('Listing', listingSchema);
const Reservation = mongoose.model('Reservation', resSchema);

module.exports = {
    db,
    Listing,
    Reservation,
}
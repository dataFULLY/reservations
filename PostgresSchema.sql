-- DROP DATABASE IF EXISTS reservations;

-- CREATE DATABASE reservations;

-- USE reservations;

CREATE TABLE rating (
    id INT NOT NULL,
    rating DECIMAL(2,2),
    numberOfRatings INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE listing (
    id INT NOT NULL,
    maxGuests SMALLINT,
    maxInfants SMALLINT,
    chargePerNight INT,
    cleaningFee INT,
    serviceFee INT,
    occupancyFee INT,
    ratingId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (ratingId) REFERENCES rating(id) ON DELETE CASCADE
);

CREATE TABLE userinfo (
    id INT NOT NULL,
    username VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE transactions (
    id INT NOT NULL,
    userId INT NOT NULL,
    payment decimal(2,2),
    PRIMARY KEY (id)
);

CREATE TABLE reservations (
    id INT NOT NULL,
    checkinDate DATE NOT NULL,
    checkoutDate DATE NOT NULL,
    listingId INT NOT NULL,
    userId INT NOT NULL,
    transactionId INT NOT NULL,
    adult INT NOT NULL,
    children INT NOT NULL,
    infant INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES userinfo(id) ON DELETE CASCADE,
    FOREIGN KEY (transactionId) REFERENCES transactions(id) ON DELETE CASCADE
);




MongoDB 'Schema'
{
    id,
    maxGuests,
    maxInfants,
    chargePerNight,
    cleaningFee,
    serviceFee,
    occupancyFee,
    rating,
    numberOfRatings,
    reservations: [{
        username,
        checkinDate,
        checkoutDate,
        adult,
        children,
        infant,
        payment
    }]
}

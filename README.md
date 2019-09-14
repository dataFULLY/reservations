# Reservations - Minctech

> Reservation module for a private lodging platform. Built with react, redux and react-redux. Supports all dates in all years, interactive user interface with highlights for chosen and hovered dates and caculates total price based on number of nights chosen by user.
> Utilizes MySQL and sequelize for database management, express for server handling.

## Related Projects

  - https://github.com/minctech/
  - https://github.com/minctech/images
  - https://github.com/minctech/reviews
  - https://github.com/minctech/carousel

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Click on Check-in or Checkout to view the calendar. Click on any date to select a length of stay.
> Click on guest to change the number of Adults, Children and Infants.

## Requirements

- Node 10.15.3 or higher

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run databuild
npm run build
npm run start (in a seperate bash window)
```

## RESTful CRUD API

### CREATE
POST '/api/listings'
Creates a new listing with provided data

POST '/api/reservations/:listingid'
Creates reservations data for listing with provided data

### READ/RETRIEVE
GET '/api/listings/:id'
Gets listing from database with given id

GET '/api/reservations/:listingid'
Gets reservations from database with given listing id

### UPDATE
PUT '/api/listings/:id'
Updates listing from database with given id

PUT '/api/reservations/:listingid'
Updates reservation from database with given listing id

### DELETE
DELETE '/api/listings/:id'
Deletes listing from database with given id

DELETE '/api/reservations/:listingid'
Deletes reservation from database with given listing id

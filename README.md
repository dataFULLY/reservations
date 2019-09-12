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

### CREATE a listing
app.post('/api/dblistings')
Creates a new listing with provided data

app.post('/api/dbbookeddates')
Creates booked dates data for listing

### READ/RETRIEVE a listing
app.get('/api/dblistings?listing=:id')
Gets listing from database with given id

app.get('/api/dbbookeddates?listing=:id')
Gets booked dates from database with given id

### UPDATE a listing
app.put('/api/dblistings?listing=:id')
Updates listing from database with given id

app.put('/api/dbbookeddates?listing=:id')
Updates booked dates from database with given id

### DELETE a listing
app.delete('/api/dblistings?listing=:id')
Deletes listing from database with given id

app.delete('/api/dbbookeddates?listing=:id')
Deletes booked dates from database with given id

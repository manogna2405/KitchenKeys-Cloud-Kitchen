# KitchenKeys – Cloud Kitchen API

## Project Overview
KitchenKeys is a Cloud Kitchen Management API developed using Node.js, Express.js, and SQLite.

This API manages kitchen stations and provides endpoints to create, retrieve, update, delete, and search station records.

## Technologies Used
- Node.js
- Express.js
- SQLite
- Postman
- JavaScript

## Features
- Retrieve all kitchen stations
- Retrieve a station by ID
- Add a new station
- Update station details
- Delete a station
- Search stations by cuisine
- Retrieve booking details using SQL JOIN operations
- Input validation and error handling

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/stations` | Get all stations |
| GET | `/stations/:id` | Get station by ID |
| POST | `/stations` | Add a station |
| PUT | `/stations/:id` | Update a station |
| DELETE | `/stations/:id` | Delete a station |
| GET | `/stations/search?cuisine=Indian` | Search by cuisine |
| GET | `/stations/bookings/details` | Get booking details using JOIN |

## How to Run the Project

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node app.js`

5. The API runs at:

   `http://localhost:3000`

## Testing

All API endpoints were tested using Postman.

Screenshots of successful requests, validation responses, and error handling are maintained separately as project evidence.

## Database Tables
- Chefs
- Stations
- Bookings

## Status
Station management APIs, cuisine search, and booking JOIN endpoint have been implemented and tested.
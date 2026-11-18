# KitchenKeys – Cloud Kitchen Booking System

## Project Overview
KitchenKeys is a Cloud Kitchen Management API developed using Node.js, Express.js, and SQLite.

The API manages chefs, kitchen stations, and bookings. It supports creating, retrieving, updating, deleting, and searching records.

## Technologies Used
- Node.js
- Express.js
- SQLite
- JavaScript
- Postman

## Features
- Create, retrieve, update, and delete chefs
- Create, retrieve, update, and delete kitchen stations
- Create, retrieve, update, and delete bookings
- Search stations by cuisine
- Validate station cuisines (Indian, Chinese, and Italian only)
- Retrieve booking details using SQL JOIN operations
- Input validation and error handling

## API Endpoints

### Chef APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/chefs` | Get all chefs |
| GET | `/chefs/:id` | Get chef by ID |
| POST | `/chefs` | Add a chef |
| PUT | `/chefs/:id` | Update a chef |
| DELETE | `/chefs/:id` | Delete a chef |

### Station APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/stations` | Get all stations |
| GET | `/stations/:id` | Get station by ID |
| POST | `/stations` | Add a station |
| PUT | `/stations/:id` | Update a station |
| DELETE | `/stations/:id` | Delete a station |
| GET | `/stations/search?cuisine=Indian` | Search stations by cuisine |
| GET | `/stations/bookings/details` | Get booking details using JOIN |

### Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/bookings` | Get all bookings |
| GET | `/bookings/:id` | Get booking by ID |
| POST | `/bookings` | Add a booking |
| PUT | `/bookings/:id` | Update a booking |
| DELETE | `/bookings/:id` | Delete a booking |

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

Tests included successful CRUD operations, station cuisine validation, cuisine search, and booking details retrieval.

Screenshots of API requests and responses are maintained separately as project evidence.

## Database Tables
- Chefs
- Stations
- Bookings

## Project Status
Chef, station, and booking management APIs have been implemented. Station cuisine validation, cuisine search, and booking details using SQL JOIN operations have also been implemented and tested.
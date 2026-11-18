# KitchenKeys – API Test Cases

## 1. Chef API Test Cases

| Test ID | Test Scenario | Expected Result | Actual Result |
|---|---|---|---|
| C01 | Get all chefs | 200 OK | Not Tested |
| C02 | Get chef by valid ID | 200 OK | Not Tested |
| C03 | Get chef by invalid ID | 404 Not Found | Not Tested |
| C04 | Add chef with valid details | 201 Created | Not Tested |
| C05 | Add chef with missing details | 400 Bad Request | Not Tested |
| C06 | Add chef with duplicate email | 409 Conflict | Not Tested |
| C07 | Update chef | 200 OK | Not Tested |
| C08 | Delete chef | 200 OK | Not Tested |

## 2. Station API Test Cases

| Test ID | Test Scenario | Expected Result | Actual Result |
|---|---|---|---|
| S01 | Get all stations | 200 OK | Not Tested |
| S02 | Get station by valid ID | 200 OK | Not Tested |
| S03 | Add station with Indian cuisine | 201 Created | Not Tested |
| S04 | Add station with Chinese cuisine | 201 Created | Not Tested |
| S05 | Add station with Italian cuisine | 201 Created | Not Tested |
| S06 | Add station with invalid cuisine | 400 Bad Request | 400 Bad Request – Passed |
| S07 | Update station with invalid cuisine | 400 Bad Request | 400 Bad Request – Passed |
| S08 | Search stations by cuisine | 200 OK | 200 OK – Passed |
| S09 | Get booking details using JOIN | 200 OK | 200 OK – Passed |
| S10 | Delete station | 200 OK | Not Tested |

## 3. Booking API Test Cases

| Test ID | Test Scenario | Expected Result | Actual Result |
|---|---|---|---|
| B01 | Get all bookings | 200 OK | 200 OK – Passed |
| B02 | Get booking by valid ID | 200 OK | 200 OK – Passed |
| B03 | Add booking with valid details | 201 Created | 201 Created – Passed |
| B04 | Add booking with missing details | 400 Bad Request | Not Tested |
| B05 | Add booking with invalid chef or station ID | 400 Bad Request | Not Tested |
| B06 | Add booking with invalid time range | 400 Bad Request | Not Tested |
| B07 | Update booking | 200 OK | 200 OK – Passed |
| B08 | Delete booking | 200 OK | 200 OK – Passed |

## Testing Tool
Postman was used to test the REST API endpoints.

## Conclusion
Chef, station, and booking CRUD APIs have been implemented. Station cuisine validation, cuisine search, and booking details using SQL JOIN operations have also been tested.
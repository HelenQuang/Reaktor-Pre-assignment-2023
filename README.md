# Birdnest Project (Reaktor Pre-assignment Software Developer Summer Trainee 2023)

A project built with NodeJS, Express, MongoDB, React, TypeScript and MUI

## Specifications:

### Backend:

- Fetch drone data from given API (https://assignments.reaktor.com/birdnest/drones) every 2 seconds
- Process drone data to get violated drones which are within No Drone Zone (100-meter-radius of a Monadikuikka birdnest)
- Fetch violated pilot information (name, email, phone) based on violated drones' serial number
- Save violated drone and pilot information to database. Database will be persisted in 10 minutes
- Create ("/violatedInfo") API to get all violated information in database

### Frontend:

- Get request to ("/violatedInfo") API every 2 seconds
- Process violated information and show inside MUI table

# Ampersand Battery Swap Network (APIs)

a RESTful APIs for Ampersand Network & Battery swapping mechanism

## Setup locally

`clone this repository`

```
git clone https://github.com/elvisiraguha/swap-mechanizm.git
```

`checkout into the repository folder`

```
cd swap-mechanizm
```

`install dependencies`

```
npm install
```

`run migrations`

```
npm run migrage
```

`populate db with seeds`

```
npm run seed
```

Replicate variables from .env-expample file into .env file with correct values

Ensure that you have postgresql and redis databases running locally

`start the application`

```
npm run dev
```

## Endpoints

| Path                                                   | Method | Description                             |
| ------------------------------------------------------ | ------ | --------------------------------------- |
| /api/v1/auth/login                                     | POST   | login user                              |
| /api/v1/auth/logout                                    | POST   | logout user                             |
| /api/v1/swap                                           | POST   | record a new battery swap               |
| /api/v1/swap/                                          | GET    | get all swap records                    |
| /api/v1/swap/\<stationId\>                             | GET    | get all swap records withinin a station |
| /api/v1/swapStation/                                   | POST   | add a new swap station                  |
| /api/v1/swapStation/                                   | GET    | get all swap stations                   |
| /api/v1/battery/                                       | GET    | get all batteries                       |
| /api/v1/battery/                                       | POST   | register a new battery                  |
| /api/v1/battery/\<batteryId\>?capacity=\<newCapacity\> | PATCH  | update battery capacity                 |
| /api/v1/battery/status                                 | GET    | get current battery capacity            |

## Response Codes:

200: Ok
201: Created
400: Bad request
401: Unauthorized
403: Forbidden
404: Not found
405: Method not allowed
409: Conflict

## Aditional notes

It is assumed that the batteries are smart, and they will be streaming their location and current capacity. To manually update the battery capacity you can use update battery capacity endpoint above. These data streamed by batteries will help the current holder to know how much capacity left, and the estimated cost for what they have used.

Having a live location of a battery will help the battery holder to locate nearest swapping stations. This migth be an issue of privacy cause by tracking the battery location, the system will be tracking the current battery holder.

It is also assumed that batteries will have following properties set by responsible entities:

- The distance bike can ride on a full battery
- The price for charging a battery from 0% to 100%

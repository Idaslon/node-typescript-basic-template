### Advanced template for Node + Typescript

## Usage
  - Clone this repository <br />
  - Remeber to delete `.gitignore` and then run `git init` to start your own git <br />

### Dependencies
  - Run `yarn` or `npm install` if you're using npm<br />

### Creating database (not necessarily docker)

```bash
sudo docker run --name postgresDatabase -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
sudo docker run --name mongoDatabase -p 27017:27017 -d -t mongo
```

### Enviroment
- Duplicate `.env.example` to create `.env` and `.env.test` and put the variables there <br />


## Features

- **Pre Code Made**
  - JWT Authentication
  - Yup validation
  - Files Upload
  - Tests with Jests

- **Code Formatter**
  - Eslint
  - Prettier
  - Root Import `~`
  - Import Helpers

- **Tests with Jest**
  - User and Session CRUD tests
  - Access private routes
  - Auth unit tests
  - Factory with Faker

- **Prisma**
  - Env variables
  - User model example
  - File model for files upload

## TO-DO

- [ ] Finish tests<br/>
- [ ] Setup Exception handler on App.ts<br/>
- [x] Assert User exists on auth middleware<br/>
- [x] Setup import helpers<br/>
- [x] Setup Eslint/ImportHelpers<br/>
- [x] Global types for auth middleware<br/>

## Possible Updates

- [ ] Background taks<br/>
- [ ] Envio de email<br/>

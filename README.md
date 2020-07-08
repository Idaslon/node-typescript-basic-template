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

- **Code Formatter**
  - Eslint
  - Prettier
  - Root Import `~`
  - Import Helpers

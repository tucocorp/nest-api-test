## Description

Experimental NestJS API for Arbolitics FullStack developer test.

## Installation

```bash
$ yarn install
```

## Install Postgres DB from docker

```bash
# execute build postgres image
$ docker compose up -d
```

## Add enviroments variables

```bash
# create a .env file on project root path
$ touch .env

# open .env
$ nano .env

# copy & paste secrets vars on .env file
  DB_TYPE=postgres
  DB_HOST=localhost
  DB_POST=5436
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  DB_NAME=db_crud
  AGRANIMO_URL_BASE="https://public-staging.agranimo.com"
  AGRANIMO_USERNAME="software@arbolitics.com"
  AGRANIMO_PASSWORD="123arbolitics123"
```

## Running the app

```bash
# development
$ yarn start:dev
```

```bash
Excelent!!! we are ready to test the API.
```

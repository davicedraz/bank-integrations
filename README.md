# Pynne technical challenge

A simple bank aggregation application that pulls information from multiple different banks and displays it.

## Setup

Make sure you have installed the following:
- [node.js](https://nodejs.org/en/download/)
- npm

Install all project dependencies

```bash
npm install
```

## Run
This application uses environment variables as required inputs. In order to run it, you need to create an file named `.env` and put all variables required (see the `.env.example` file):

```bash
ACCOUNT_NUMBER=
FETCH_TRANSACTIONS_FROM_DATE=
FETCH_TRANSACTIONS_TO_DATE=
```

Then, execute the application to print all balances and transactions from current Bank Integrations

```bash
npm start
```

## Test

Run all test suites and log mocked results:

```bash
npm test
```

# Pynne technical challenge

A simple bank aggregation application that pulls information from multiple different banks and displays it.
----------------------------------------------------------------

### Project dependencies:
- vitest*
- dotenv
- ts-node
- typescript

#### *Why `vitest`? 
I took advantage of the project to test a new test library that I had never used, as an alternative to the well-known [Jest](https://jestjs.io/).

To test typescript files, we need to transpile them during testing. [Vitest](https://vitest.dev/) do that natively, so we don't need to deal with the complexity of transforming source files. Watch mode is enabled by default, aligning itself with the way Vite pushes for a dev first experience. Also, Vitest cares a lot about performance and uses Worker threads to run as much as possible in parallel.

I found it interesting and it turned out to be really useful and fast.

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

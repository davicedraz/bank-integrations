import { BankController } from './controller/BankController';
import { Bank1Adapter } from './service/adapter/Bank1Adapter';
import { Bank2Adapter } from './service/adapter/Bank2Adapter';

require('dotenv').config();

class Application {

  private bankController: BankController;

  constructor() {
    const bank1IntegrationService = new Bank1Adapter();
    const bank2IntegrationService = new Bank2Adapter();

    this.bankController = new BankController(bank1IntegrationService, bank2IntegrationService);
  }

  public run() {
    this.verifyEnvironment();
    this.bankController.printBalances();
    this.bankController.printTransactions();
  }

  private verifyEnvironment() {
    const envs = ["ACCOUNT_NUMBER", "FETCH_TRANSACTIONS_FROM_DATE"];
    envs.forEach((env) => {
      if (!(env in process.env)) {
        throw new Error(`Env variable ${env} is not defined`);
      }
    });
  }
}

const app = new Application();
app.run();

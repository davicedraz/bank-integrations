import { BankController } from './controller/BankController';
import { Bank1Adapter } from './service/adapter/Bank1Adapter';
import { Bank2Adapter } from './service/adapter/Bank2Adapter';
import { Bank1AccountSource } from '../bank-integrations/bank1/integration/Bank1AccountSource';
import { Bank2AccountSource } from '../bank-integrations/bank2/integration/Bank2AccountSource';

require('dotenv').config();

class Application {

  private bankController: BankController;

  constructor() {
    const bank1AccountSource = new Bank1AccountSource();
    const bank2AccountSource = new Bank2AccountSource();
    
    const bank1IntegrationService = new Bank1Adapter(bank1AccountSource);
    const bank2IntegrationService = new Bank2Adapter(bank2AccountSource);

    this.bankController = new BankController(bank1IntegrationService, bank2IntegrationService);
  }

  public run() {
    this.verifyEnvironment();
    this.bankController.printBalances();
    this.bankController.printTransactions();
  }

  private verifyEnvironment() {
    const requiredEnvs = ["ACCOUNT_NUMBER", "FETCH_TRANSACTIONS_FROM_DATE"];
    requiredEnvs.forEach((env) => {
      if (!(env in process.env)) {
        throw new Error(`Env variable ${env} is not defined`);
      }
    });
  }
}

const app = new Application();
app.run();

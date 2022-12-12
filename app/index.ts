import { BankController } from './controller/BankController';
import { Bank1Adapter } from './service/adapter/Bank1Adapter';
import { Bank2Adapter } from './service/adapter/Bank2Adapter';

const bank1IntegrationService = new Bank1Adapter();
const bank2IntegrationService = new Bank2Adapter();

const bankController = new BankController(bank1IntegrationService, bank2IntegrationService);

bankController.printBalances();
bankController.printTransactions();

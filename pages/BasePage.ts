import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AlertValidation} from "../helper/AlertValidation";


export class BasePage {

    openAccount = element(by.buttonText('Open Account'));
    openCustomer = element(by.buttonText('Customers'));

    ClickOnOpenAccountTab(){
        this.openAccount.click();
    }

    ClickOnCustomerTab(){
        this.openCustomer.click();

    }

}




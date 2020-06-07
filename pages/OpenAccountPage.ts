import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AlertValidation } from "../helper/AlertValidation";


export class OpenAccountPage {
    prop = require('../testdata/prop');
    fullname = this.prop.customers.firstname+ " " +this.prop.customers.lastname;
    

    Customer = element(by.id('userSelect'));
    Options = this.Customer.all(by.tagName('option'));
    Currency = element(by.css('#currency'));
    Process = element(by.buttonText('Process'))

    SelectCustomer() {
        let fullname = this.fullname;
        this.Options.then(function (items: any) {
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    log4jsconfig.Log().debug(txt);
                    if (txt == fullname) {
                        log4jsconfig.Log().debug('Item was fund in the list');
                        items[i].click();
                        log4jsconfig.Log().debug('Item was clicked');
                    }
                })
            }
        })

    }

    SelectCurrency() {
        this.Currency.$('[value="Rupee"]').click();
    }

    ClickProcessBtn() {
        this.Process.click();
        AlertValidation.VerifyAlertMessage('Account created successfully')
    }
}                
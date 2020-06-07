import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AlertValidation} from "../helper/AlertValidation";


export class AddCustomerPage {
    prop = require('../testdata/prop');
    
    firstName = element(by.model('fName'));
    lastName = element(by.model('lName'));
    postCode = element(by.model('postCd'));
    addCustBtn = element(by.className('btn btn-default'))

    firstname = this.prop.customers.firstname;
    lastname = this.prop.customers.lastname;
    postcode = this.prop.customers.postcode;


    addCustomer(){
        this.firstName.sendKeys(this.firstname);
        this.lastName.sendKeys(this.lastname);
        this.postCode.sendKeys(this.postcode);
        this.addCustBtn.click();
        AlertValidation.VerifyAlertMessage('Customer added successfully');
    }

}
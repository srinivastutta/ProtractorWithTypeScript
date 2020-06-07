import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/basePage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { CustomerPage } from "../pages/CustomerPage";

describe('Bank Feature', function () {
    let prop = require('../testdata/prop');

    beforeEach(function () {
        browser.get(prop.url);
    })

    it('Verify Add Customer', function () {
        let addCustPage = new AddCustomerPage();
        addCustPage.addCustomer();
       
    })

    it('Verify Add Account', function () {
        new BasePage().ClickOnOpenAccountTab();
        let openCustPage = new OpenAccountPage();
        openCustPage.SelectCustomer();
        openCustPage.SelectCurrency();
        openCustPage.ClickProcessBtn();
        
    })

    it('Verify delete Customer', function () {
        new BasePage().ClickOnOpenAccountTab();
        let custPage = new CustomerPage();
        custPage.DeleteCustomer();
      
    })
})
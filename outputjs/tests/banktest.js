"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomerPage_1 = require("../pages/AddCustomerPage");
var basePage_1 = require("../pages/basePage");
var OpenAccountPage_1 = require("../pages/OpenAccountPage");
var CustomerPage_1 = require("../pages/CustomerPage");
describe('Bank Feature', function () {
    var prop = require('../testdata/prop');
    beforeEach(function () {
        protractor_1.browser.get(prop.url);
    });
    it('Verify Add Customer', function () {
        var addCustPage = new AddCustomerPage_1.AddCustomerPage();
        addCustPage.addCustomer();
    });
    it('Verify Add Account', function () {
        new basePage_1.BasePage().ClickOnOpenAccountTab();
        var openCustPage = new OpenAccountPage_1.OpenAccountPage();
        openCustPage.SelectCustomer();
        openCustPage.SelectCurrency();
        openCustPage.ClickProcessBtn();
    });
    it('Verify delete Customer', function () {
        new basePage_1.BasePage().ClickOnOpenAccountTab();
        var custPage = new CustomerPage_1.CustomerPage();
        custPage.DeleteCustomer();
    });
});

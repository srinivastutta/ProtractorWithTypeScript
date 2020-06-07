"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCustomerPage = void 0;
var protractor_1 = require("protractor");
var AlertValidation_1 = require("../helper/AlertValidation");
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage() {
        this.prop = require('../testdata/prop');
        this.firstName = protractor_1.element(protractor_1.by.model('fName'));
        this.lastName = protractor_1.element(protractor_1.by.model('lName'));
        this.postCode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addCustBtn = protractor_1.element(protractor_1.by.className('btn btn-default'));
        this.firstname = this.prop.customers.firstname;
        this.lastname = this.prop.customers.lastname;
        this.postcode = this.prop.customers.postcode;
    }
    AddCustomerPage.prototype.addCustomer = function () {
        this.firstName.sendKeys(this.firstname);
        this.lastName.sendKeys(this.lastname);
        this.postCode.sendKeys(this.postcode);
        this.addCustBtn.click();
        AlertValidation_1.AlertValidation.VerifyAlertMessage('Customer added successfully');
    };
    return AddCustomerPage;
}());
exports.AddCustomerPage = AddCustomerPage;

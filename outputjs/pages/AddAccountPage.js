"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccountPage = void 0;
var protractor_1 = require("protractor");
var AlertValidation_1 = require("../helper/AlertValidation");
var AddAccountPage = /** @class */ (function () {
    function AddAccountPage() {
        this.firstName = protractor_1.element(protractor_1.by.model('fName'));
        this.lastName = protractor_1.element(protractor_1.by.model('lName'));
        this.postCode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addCustBtn = protractor_1.element(protractor_1.by.className('btn btn-default'));
    }
    AddAccountPage.prototype.addCustomer = function () {
        this.firstName.sendKeys('ABC');
        this.lastName.sendKeys('XYZ');
        this.postCode.sendKeys('123');
        this.addCustBtn.click();
        AlertValidation_1.AlertValidation.VerifyAlertMessage('Customer added successfully');
    };
    return AddAccountPage;
}());
exports.AddAccountPage = AddAccountPage;

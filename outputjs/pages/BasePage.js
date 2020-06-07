"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.openAccount = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.openCustomer = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.ClickOnOpenAccountTab = function () {
        this.openAccount.click();
    };
    BasePage.prototype.ClickOnCustomerTab = function () {
        this.openCustomer.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;

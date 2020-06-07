"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAccountPage = void 0;
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../appenders/log4jsconfig");
var AlertValidation_1 = require("../helper/AlertValidation");
var OpenAccountPage = /** @class */ (function () {
    function OpenAccountPage() {
        this.prop = require('../testdata/prop');
        this.fullname = this.prop.customers.firstname + " " + this.prop.customers.lastname;
        this.Customer = protractor_1.element(protractor_1.by.id('userSelect'));
        this.Options = this.Customer.all(protractor_1.by.tagName('option'));
        this.Currency = protractor_1.element(protractor_1.by.css('#currency'));
        this.Process = protractor_1.element(protractor_1.by.buttonText('Process'));
    }
    OpenAccountPage.prototype.SelectCustomer = function () {
        var fullname = this.fullname;
        this.Options.then(function (items) {
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    log4jsconfig_1.log4jsconfig.Log().debug(txt);
                    if (txt == fullname) {
                        log4jsconfig_1.log4jsconfig.Log().debug('Item was fund in the list');
                        items[i].click();
                        log4jsconfig_1.log4jsconfig.Log().debug('Item was clicked');
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
    };
    OpenAccountPage.prototype.SelectCurrency = function () {
        this.Currency.$('[value="Rupee"]').click();
    };
    OpenAccountPage.prototype.ClickProcessBtn = function () {
        this.Process.click();
        AlertValidation_1.AlertValidation.VerifyAlertMessage('Account created successfully');
    };
    return OpenAccountPage;
}());
exports.OpenAccountPage = OpenAccountPage;

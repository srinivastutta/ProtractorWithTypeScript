"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertValidation = void 0;
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../appenders/log4jsconfig");
var ptor_1 = require("protractor/built/ptor");
var AlertValidation = /** @class */ (function () {
    function AlertValidation() {
    }
    AlertValidation.VerifyAlertMessage = function (text) {
        var EC = ptor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");
        var Alert = protractor_1.browser.switchTo().alert();
        var AlertText = Alert.getText();
        expect(AlertText).toContain(text);
        AlertText.then(function (txt) {
            log4jsconfig_1.log4jsconfig.Log().debug(txt);
        });
        Alert.accept();
    };
    return AlertValidation;
}());
exports.AlertValidation = AlertValidation;

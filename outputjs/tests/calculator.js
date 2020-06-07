"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../appenders/log4jsconfig");
describe('Calculator Feature', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('calculator test', function () {
        expect(protractor_1.browser.getTitle()).toContain('Super');
    });
    it('calculator test', function () {
        protractor_1.element(protractor_1.by.model('first')).sendKeys('5');
        protractor_1.element(protractor_1.by.model('second')).sendKeys('6');
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        protractor_1.element(protractor_1.by.css('tr > td:nth-child(3)')).getText().then(function (text) {
            expect(text).toEqual('11');
            console.log(text);
            log4jsconfig_1.log4jsconfig.Log().debug("Browser Title :- " + text);
        });
    });
});

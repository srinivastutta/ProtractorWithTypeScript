import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";

describe ('Calculator Feature', function(){

    beforeEach(function (){
        browser.get('https://juliemr.github.io/protractor-demo/');
    })

    it('calculator test', function(){
        expect(browser.getTitle()).toContain('Super')

    })

    it('calculator test', function(){
        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('6');
        element(by.id('gobutton')).click();
        element(by.css('tr > td:nth-child(3)')).getText().then(function (text) {
            expect(text).toEqual('11');
            console.log(text)
            log4jsconfig.Log().debug("Browser Title :- " + text);

        })
    })

})
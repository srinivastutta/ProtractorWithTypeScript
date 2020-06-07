"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Window Handle', function () {
    it('Multiple Win Handle', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://skpatro.github.io/demo/links/');
        protractor_1.browser.getTitle().then(function (text) {
            console.log(text);
        });
        protractor_1.element(protractor_1.by.name('NewWindow')).click();
        var WindowHandles = protractor_1.browser.getAllWindowHandles();
        var parentWindow, childWindow;
        WindowHandles.then(function (handles) {
            parentWindow = handles[0];
            childWindow = handles[1];
            console.log('Total window count : ' + handles.length);
            protractor_1.browser.switchTo().window(childWindow).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    console.log('Child window name : ' + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(parentWindow).then(function () {
                console.log("Going back to Parent Window");
                protractor_1.browser.getTitle().then(function (text) {
                    console.log("Parent Window Name : " + text);
                });
            });
        });
    });
});

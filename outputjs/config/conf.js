"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
        //    browserName : 'firefox',
        //    marionette : true,
        //    acceptSslCert : true
    },
    suites: {
        bank: ['../tests/banktest.js'],
        calc: ['../tests/calculator.js'],
        both: ['../tests/banktest.js', '../tests/calculator.js']
    },
    specs: ['../tests/multiplewindowhandle.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};

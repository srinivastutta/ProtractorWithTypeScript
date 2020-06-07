"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPage = void 0;
var protractor_1 = require("protractor");
var CustomerPage = /** @class */ (function () {
    function CustomerPage() {
        this.prop = require('../testdata/prop');
        this.firstname = this.prop.customers.firstname;
        this.Rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    CustomerPage.prototype.DeleteCustomer = function () {
        var firstname = this.firstname;
        this.Rows.each(function (row) {
            var cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (val) {
                if (val == firstname) {
                    cells.get(4).$('button').click();
                }
            });
        });
    };
    return CustomerPage;
}());
exports.CustomerPage = CustomerPage;

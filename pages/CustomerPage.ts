import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AlertValidation} from "../helper/AlertValidation";

export class CustomerPage {
    prop = require('../testdata/prop');
    firstname = this.prop.customers.firstname;
    
    Rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    
    DeleteCustomer(){
        let firstname = this.firstname;
         this.Rows.each(function (row: any) {
            let cells = row.$$('td');  //all(by.css)
            cells.get(0).getText().then(function (val: any) {
                if (val == firstname) {
                    cells.get(4).$('button').click();
                }

            })


        })

    }
}
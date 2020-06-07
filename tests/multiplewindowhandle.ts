import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/basePage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { CustomerPage } from "../pages/CustomerPage";

describe('Window Handle', function () {

    it('Multiple Win Handle', function () {
        browser.ignoreSynchronization = true;
        browser.get('https://skpatro.github.io/demo/links/');

        browser.getTitle().then(function (text){
            console.log(text);
        })
        
        element(by.name('NewWindow')).click();

        let WindowHandles = browser.getAllWindowHandles();

        let parentWindow, childWindow;

        WindowHandles.then(function (handles){
            parentWindow = handles [0];
            childWindow = handles [1];
            console.log('Total window count : ' +handles.length)
          
            browser.switchTo().window(childWindow).then(function (){
                browser.getTitle().then(function (txt){
                console.log('Child window name : '+txt)
                browser.close();    
                })
            })

            browser.switchTo().window(parentWindow).then(function (){
                console.log("Going back to Parent Window")
                browser.getTitle().then(function (text){
                    console.log("Parent Window Name : "+text)
                })
            })
        })

    })
})
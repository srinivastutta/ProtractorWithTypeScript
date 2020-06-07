import { browser, element, by } from "protractor";
import { log4jsconfig } from "../appenders/log4jsconfig";
import { protractor } from "protractor/built/ptor";

export class AlertValidation{

        static VerifyAlertMessage (text: String) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");

        let Alert = browser.switchTo().alert();
        let AlertText = Alert.getText();
        expect(AlertText).toContain(text);
        AlertText.then(function (txt){
            log4jsconfig.Log().debug(txt);
        })
                Alert.accept();
                
    }
 
}

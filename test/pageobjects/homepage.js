
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get startOverButton () { return $('//div[@class="result__restart"]/button[contains(@class,"start-over")]'); }
    get otherLoansInput () { return $('//input[@id="otherloans"]'); }
    get otherLoanExpensesInput () { return $('//input[@aria-labelledby="q3q4"]'); }
    get creditCardInput () { return $('//label[contains(text(),"Total credit card limits")]/parent::div/div/input'); }
    get monthlyExpensesInput () { return $('//input[@id="expenses"]'); }
    get homeLoansInput () { return $('//input[@id="homeloans"]'); }
    get borrowCalculatorButton () { return $('//button[@id="btnBorrowCalculater"]'); }
    get errroMessageDiv () { return $('//div[contains(@class,"borrow__error__text")]');}
    get NoOfDependants () { return $('//select[@title="Number of dependants"]');}
    get propertyToBuyHome () {  return $('//input[@id="borrow_type_home"]/ancestor::li'); }
    get annualIncomeInput () {  return $('//label[contains(text(),"Your annual income (before tax)")]/parent::div/div/input'); }
    get otherIncomeInput () {  return $('//label[contains(text(),"Your annual other income (optional)")]/parent::div/div/input'); }
    get borrowResultElement () { return $('//span[@id="borrowResultTextAmount"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  
    getApplicantType(type){
        if( type === 'Single')
            return  $('//input[@id="application_type_single"]/ancestor::li');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }

}

module.exports = new HomePage();

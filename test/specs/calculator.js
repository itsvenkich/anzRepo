import  {clickElement,setValue} from '../../support/CommonFunctions.js';
const HomePage = require('../pageobjects/homepage')
const PersonalDetails   = require('../../data/personalDetails.json')


describe('My Calculator application', () => {

    it('Providing the personal details,  expect the borrowing Estimate should be greater than 40000', async () => {
      
        if(PersonalDetails.personalData.applicationType === "Single")
        {
            await clickElement(HomePage.getApplicantType("Single"));
        }
        await HomePage.NoOfDependants.waitForClickable();
        await (await HomePage.NoOfDependants).selectByVisibleText(PersonalDetails.personalData.NoOfDependents)
        if(PersonalDetails.personalData.propertyToBuy === "Home to live in")
        {
            await clickElement(HomePage.propertyToBuyHome);
        }
        await setValue( HomePage.annualIncomeInput,PersonalDetails.personalData.annualIncome);
        await setValue( HomePage.otherIncomeInput,PersonalDetails.personalData.otherIncome);
        await setValue( HomePage.monthlyExpensesInput,PersonalDetails.personalData.livingExpenses);
        await setValue( HomePage.homeLoansInput,PersonalDetails.personalData.homeLoanExpenses);
        await setValue( HomePage.otherLoansInput,PersonalDetails.personalData.otherLoanExpenses);
        await setValue( HomePage.otherLoanExpensesInput,PersonalDetails.personalData.monthlyCommitments);
        await setValue( HomePage.creditCardInput,PersonalDetails.personalData.creditCardLimits);
        await clickElement(HomePage.borrowCalculatorButton);

        await (await HomePage.borrowResultElement).waitForDisplayed();
        let resultAmount = await (await HomePage.borrowResultElement).getText();
        resultAmount =Number(resultAmount.replace('$','').replace(',',''));
        await browser.pause(2000)
        expect(resultAmount).toBeGreaterThan(40000);
    })

    it('clicking the start over button clears the form', async () => {
        await setValue(HomePage.monthlyExpensesInput,10);
        await setValue(HomePage.otherLoansInput,10);
        await clickElement(HomePage.startOverButton);
        expect((await HomePage.monthlyExpensesInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.annualIncomeInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.otherIncomeInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.otherLoansInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.otherLoanExpensesInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.creditCardInput).getValue()).toHaveValueContaining('0');
        expect((await HomePage.homeLoansInput).getValue()).toHaveValueContaining('0');
    })


    it('Enter $1 for Livings Expenses and click on How much I borrow button returns the expected message', async () => {
        await setValue(HomePage.monthlyExpensesInput,1);
        await clickElement(await HomePage.borrowCalculatorButton);
        await (await HomePage.errroMessageDiv).waitForDisplayed();
        await (await HomePage.errroMessageDiv).scrollIntoView();
        expect((await HomePage.errroMessageDiv).getText()).toHaveTextContaining('unable to give you an estimate of your borrowing power with this calculator. For questions, call us on ')
    })
    

    beforeEach(async function(done) {
        await browser.maximizeWindow();
       await HomePage.open()
    });
    afterEach(async function(done) {
        await browser.deleteAllCookies();
        await browser.reloadSession();
    });
})



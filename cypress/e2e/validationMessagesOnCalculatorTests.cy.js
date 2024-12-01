import { calculatorTestData, operations } from '../fixtures/testData';
import { generateRandomString } from '../fixtures/dataGenerator';
import { calculatorPage } from '../support/pages/calculatorPage';

describe('Test operations with string inputs across all builds', () => {
    const { builds} = calculatorTestData;

    beforeEach(() => {
        calculatorPage.visit();
    });

    builds.forEach((build) => {
        Object.values(operations).forEach((operation) => {
            it(`Validates operation '${operation}' with string inputs on build '${build}'`, () => {
                const firstNumber = generateRandomString(10, false);
                const secondNumber = generateRandomString(10, false);

                calculatorPage.selectBuild(build);
                calculatorPage.enterFirstNumber(firstNumber);
                calculatorPage.enterSecondNumber(secondNumber);
                calculatorPage.selectOperation(operation);
                calculatorPage.clickCalculate();
                
                if (operation === operations.CONCATENATE) {
                    calculatorPage.waitUntilAnswerFieldIsDisplayed();
                    calculatorPage.verifyAnswer(firstNumber, secondNumber, operations.CONCATENATE);
                } else {
                    calculatorPage.verifyValidationMessage();
                }
            });
        });
    });

    afterEach(() => {
        cy.screenshot();
        calculatorPage.reloadPage();
    });
});

import { calculatorPage } from '../support/pages/calculatorPage';
import { calculatorTestData, operations } from '../fixtures/testData';

describe('Division calculator tests', () => {
    const { builds, inputs } = calculatorTestData;

    beforeEach(() => {
        calculatorPage.visit();
    });

    builds.forEach((build) => {
        it(`Validates division operation on build: ${build}`, () => {
            calculatorPage.selectBuild(build);
            calculatorPage.verifyIntegerOnlyCheckboxIsNotDisabled();
            calculatorPage.verifyClearButtonIsNotDisabledByDefault();

            calculatorPage.enterFirstNumber(inputs.firstNumber);
            calculatorPage.enterSecondNumber(inputs.secondNumber);
            calculatorPage.selectOperation(operations.DIVIDE);
            calculatorPage.verifyIntegerOnlyCheckboxState(operations.DIVIDE);
            calculatorPage.clickCalculate();

            calculatorPage.waitUntilAnswerFieldIsDisplayed();
            calculatorPage.verifyAnswer(inputs.firstNumber, inputs.secondNumber, operations.DIVIDE);
        });
    });

    afterEach(() => {
        cy.screenshot();
        calculatorPage.clearAnswerField();
        calculatorPage.reloadPage();
    });
});
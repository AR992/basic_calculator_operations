import { calculatorPage } from '../support/pages/calculatorPage';
import { calculatorTestData, operations } from '../fixtures/testData';

describe('Other calculator tests', () => {
    const { builds, inputs } = calculatorTestData;

    beforeEach(() => {
        calculatorPage.visit();
    });

    builds.forEach((build) => {
        it(`Validates add operation on build: ${build}`, () => {
            calculatorPage.selectBuild(build);
            calculatorPage.verifyIntegerOnlyCheckboxIsNotDisabled();
            calculatorPage.verifyClearButtonIsNotDisabledByDefault();

            calculatorPage.enterFirstNumber(inputs.firstNumber);
            calculatorPage.enterSecondNumber(inputs.secondNumber);
            calculatorPage.selectOperation(operations.ADD);
            calculatorPage.verifyIntegerOnlyCheckboxState(operations.ADD);
            calculatorPage.clickCalculate();

            calculatorPage.waitUntilAnswerFieldIsDisplayed();
            calculatorPage.verifyAnswer(inputs.firstNumber, inputs.secondNumber, operations.ADD);
        });
    });

    builds.forEach((build) => {
        it(`Validates subtract operation on build: ${build}`, () => {
            calculatorPage.selectBuild(build);
            calculatorPage.verifyIntegerOnlyCheckboxIsNotDisabled();
            calculatorPage.verifyClearButtonIsNotDisabledByDefault();

            calculatorPage.enterFirstNumber(inputs.firstNumber);
            calculatorPage.enterSecondNumber(inputs.secondNumber);
            calculatorPage.selectOperation(operations.SUBTRACT);
            calculatorPage.verifyIntegerOnlyCheckboxState(operations.SUBTRACT);
            calculatorPage.clickCalculate();

            calculatorPage.waitUntilAnswerFieldIsDisplayed();
            calculatorPage.verifyAnswer(inputs.firstNumber, inputs.secondNumber, operations.SUBTRACT);
        });
    });

    builds.forEach((build) => {
        it(`Validates multiply operation on build: ${build}`, () => {
            calculatorPage.selectBuild(build);
            calculatorPage.verifyIntegerOnlyCheckboxIsNotDisabled();
            calculatorPage.verifyClearButtonIsNotDisabledByDefault();

            calculatorPage.enterFirstNumber(inputs.firstNumber);
            calculatorPage.enterSecondNumber(inputs.secondNumber);
            calculatorPage.selectOperation(operations.MULTIPLY);
            calculatorPage.verifyIntegerOnlyCheckboxState(operations.MULTIPLY);
            calculatorPage.clickCalculate();

            calculatorPage.waitUntilAnswerFieldIsDisplayed();
            calculatorPage.verifyAnswer(inputs.firstNumber, inputs.secondNumber, operations.MULTIPLY);
        });
    });

    builds.forEach((build) => {
        it(`Validates concatenate operation on build: ${build}`, () => {
            calculatorPage.selectBuild(build);
            calculatorPage.verifyIntegerOnlyCheckboxIsNotDisabled();
            calculatorPage.verifyClearButtonIsNotDisabledByDefault();

            calculatorPage.enterFirstNumber(inputs.firstNumber);
            calculatorPage.enterSecondNumber(inputs.secondNumber);
            calculatorPage.selectOperation(operations.CONCATENATE);
            calculatorPage.verifyIntegerOnlyCheckboxState(operations.CONCATENATE);
            calculatorPage.clickCalculate();

            calculatorPage.waitUntilAnswerFieldIsDisplayed();
            calculatorPage.verifyAnswer(inputs.firstNumber, inputs.secondNumber, operations.CONCATENATE);
        });
    });

    afterEach(() => {
        cy.screenshot();
        calculatorPage.clearAnswerField();
        calculatorPage.reloadPage();
    });
});
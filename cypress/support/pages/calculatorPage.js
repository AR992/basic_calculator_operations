import { operations } from '../../fixtures/testData';

class CalculatorPage {

    elements = {
        buildDropdown: () => cy.get('[data-testid="selectBuild"]'),
        firstNumberField: () => cy.get('[data-testid="number1Field"]'),
        secondNumberField: () => cy.get('[data-testid="number2Field"]'),
        operationDropdown: () => cy.get('[data-testid="selectOperationDropdown"]'),
        calculateButton: () => cy.get('[data-testid="calculateButton"]'),
        answerField: () => cy.get('[data-testid="numberAnswerField"]'),
        clearButton: () => cy.get('[data-testid="clearButton"]'),
        integerOnlyCheckbox: () => cy.get('[data-testid="integerSelect"]'),
        errorMessage: () => cy.get('[data-testid="errorMsgField"]')
    }

    visit() {
        cy.visit('/BasicCalculator.html');
        cy.document().its('readyState').should('eq', 'complete');
        cy.log('Navigated to the Basic Calculator page');
    }

    selectBuild(buildName) {
        this.elements.buildDropdown().select(buildName);
        cy.log('Build ' + buildName + ' successfully selected.');
    }

    enterFirstNumber(number) {
        this.elements.firstNumberField().clear().type(number);
        cy.log('Enter ' + number + ' in first number field.');
    }

    enterSecondNumber(number) {
        this.elements.secondNumberField().clear().type(number);
        cy.log('Enter ' + number + ' in second number field.');
    }

    selectOperation(operation) {
        this.elements.operationDropdown().select(operation);
        cy.log('Performed the ' + operation + ' operation.');
    }

    clickCalculate() {
        this.elements.calculateButton().click();
        cy.log('Click on Calculate button');
    }

    verifyAnswer(firstNumber, secondNumber, operation) {
        let expectedAnswer;

        switch (operation) {
            case operations.ADD:
                const number1 = parseFloat(firstNumber);
                const number2 = parseFloat(secondNumber);
                expectedAnswer = number1 + number2;
                break;
            case operations.SUBTRACT:
                expectedAnswer = firstNumber - secondNumber;
                break;
            case operations.MULTIPLY:
                expectedAnswer = firstNumber * secondNumber;
                break;
            case operations.DIVIDE:
                expectedAnswer = firstNumber / secondNumber;
                break;
            case operations.CONCATENATE:
                expectedAnswer = firstNumber + secondNumber;
                break;
            default:
                throw new Error(`Operation '${operation}' is not supported.`);
        }

        if (operation === operations.CONCATENATE) {
            this.elements.answerField().should('have.value', expectedAnswer);
        }
        else {
            this.elements.answerField().invoke('val').then((value) => {
                const numericValue = parseFloat(value);
                expect(numericValue).to.eq(expectedAnswer);
                expect(numericValue).to.be.a('number');
            });
        }

        cy.log(`Verified the result of ${operation} between ${firstNumber} and ${secondNumber}: ${expectedAnswer}`);
    }

    clearAnswerField() {
        this.elements.clearButton().click();
        cy.log('Click on Clear button');
    }

    verifyIntegerOnlyCheckboxIsNotDisabled() {
        this.elements.integerOnlyCheckbox().should('not.be.disabled');
    }

    waitUntilAnswerFieldIsDisplayed() {
        this.elements.answerField().should('be.visible');
    }

    verifyClearButtonIsNotDisabledByDefault() {
        this.elements.clearButton().should('not.be.disabled');
    }

    reloadPage() {
        cy.reload();
        cy.log('Reload Calculator page');
    }

    verifyIntegerOnlyCheckboxState(operation) {
        if (operation === operations.CONCATENATE) {
            this.elements.integerOnlyCheckbox().should('not.be.visible');
        } else {
            this.elements.integerOnlyCheckbox().should('be.visible');
        }
    }

    verifyValidationMessage() {
        this.elements.errorMessage().should('contain.text', 'Number 1 is not a number');
        cy.log('Verify validation message.');
    }
}

export const calculatorPage = new CalculatorPage();
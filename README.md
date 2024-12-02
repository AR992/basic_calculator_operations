# Basic Calculator Automation Project
This repository contains automation scripts for the following task:

**Test description**: 
Validate that dividing two numbers works correctly on each build. If not, report which builds are broken.

## How to Use
1. **Clone this repository**:
git clone https://github.com/AR992/basic_calculator_operations.git

2. **Install dependencies**:
npm install

3. **Run tests**:
    1. Open the Cypress dashbord: 
    npm run cy:open

    2. Run all tests:
    npm run allTests

    3. Run only division tests:
    npm run divisionTests

4. **Optional**:
    1. Run tests for other operations:
    npm run otherTests

    2. Run validation tests for all operations:
    npm run validationTests

5. **Additional Information**: 

1. By default, the scripts are set to run in Chrome, but you can change the browser as needed.
Example: Instead of --browser=chrome, use --browser=firefox.

2. Reported issues can be found in a document that I will provide via email.

### Note
DIVISION on build 4 and 5 work as expected, but there are issues with Integers Only checkbox (build 4) and Clear button (build 5).
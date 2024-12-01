# Basic Calculator Automation Project

This repository contains automation scripts for the following task:
Test description: Validate that dividing two numbers works correctly on each build. If not, report which builds are broken.

## How to Use
1. Clone this repository:
git clone https://github.com/AR992/basic_calculator_operations.git

2. Install dependencies:
npm install

3. Run tests:
open cypress dashbord: npm run cy:open
run all tests: npm run allTests
run only division tests: npm run divisionTests

4. Optional:
run only other operations tests: npm run otherTests
run only validations tests for all operations: npm run validationTests

NOTE: By default, I have set the scripts to run in Chrome, but you can change it and run them on your desired browser.

# TDDRnTodoList
TDD  enzyme react-native TypeScript  Jest React-redux

## Step-1 Create empty React-native typescript project
```
 react-native init TDDtodo --template typescript

 cd TDDtodo

```

## Step-2 Setting Up Jest
Jest is already installed by default  We do need to install *ts-jest*.
```
npm install --save-dev ts-jest

or 

yarn add -D ts-jest
```
Create a file called *tsconfig.jest.json* in your root directory.
```
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "jsx": "react",
    "module": "commonjs"
  }
}
```

add the following to the jest key in your package.json 
```

"jest": {
  "preset": "react-native",
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.jest.json"
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"
} 
```
##Step-3  Setting Up Enzyme

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-dom @types/enzyme @types/enzyme-adapter-react-16
```
we need to configure Enzyme

Create a file called *enzyme.config.js* in your root directory.

```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

jest key in your *jest.config.js* to include the following:

```
  setupFiles: ["<rootDir>/enzyme.config.js"]

```

Update few test cases in App-test.tsx
it will cove all function testing and class components and internal functions

## step4 Setting up Redux

add redux dependencies
```
 npm install redux react-redux
```
add redux middle ware

```
npm install redux-thunk
```

Code Coverage

To begin with, let’s learn about code coverage. This metric aims to measure number of lines covered by the test cases. It reports total number of lines in the code and number of lines executed by tests. Think of it as the degree to which the source code of a program is executed when a test suite runs. The intent is, the higher the code coverage, the lower the chance of having undetected software bugs.

There are a number of coverage criteria, the main ones being

Function coverage – Has each function (or subroutine) in the program been called?
Statement coverage – Has each statement in the program been executed?

Edge coverage – has every edge in the Control flow graph been executed?

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Some_types_of_control_flow_graphs.svg/220px-Some_types_of_control_flow_graphs.svg.png)

Branch coverage – Has each branch  of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed? Notice that this one is a subset of Edge coverage.
![alt text](https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/DD-Path.svg/220px-DD-Path.svg.png)

Condition coverage (or predicate coverage) – Has each Boolean sub-expression evaluated both to true and false?

Test Coverage

Test Coverage aims to measure of the effectiveness of testing in a qualitative manner. It determines whether the test cases are covering entire functional requirements. You can think of it as a kind of black box testing, where test cases are not written based on code but based on user requirements or expected functionality.


react-dom
This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.



Connected Components
Test the component, not the connection.

While testing the redux wrapped (connected) HOC is not recommended, the reality is you will often to search for the existence of components wrapped with connect, withStyles etc. This is where an enhanced shallow function really shines in testing. And/or just search for the wrapped component: withStyles(Header).

But what about mapStateToProps? This can be exported and tested in isolation as a pure function if desired. My response to this method is a resounding “Meh.” Really, if you Shallow render a container and test that the appropriate actions are dispatched, you’re already testing this.

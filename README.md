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

Create a file called *enzymeConfig.js* in your root directory.

```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

jest key in your *jest.config.js* to include the following:

```
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"]

```
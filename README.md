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
Create a file called tsconfig.jest.json in your root directory.
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

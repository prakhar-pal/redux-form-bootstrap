# Introduction
This doc details the plan to build reusable [React](https://reactjs.org) components for HTML `form` that can be used with [redux-form](https://redux-form.com), difference being that all changes will be captured in these wrapper components and updated in redux state via redux-form.

Dependecies are listed as below -
* react
* redux-form
* reactstrap (optional, meaning other styles can also be used)
  
# Components

## 1. Input
It will serve as replacement for HTML `input` tag.
    
Its expected behavior is outlined as below -

1. Initial value should empty string i.e. '',
2. Should ensure to be controlled component,
3. Wrapper shouldn't have local state,
4. Should blur when user blurs, same for focus,
6. Should have disabled as option,
7. Should be set to '' if the box is cleared,
8. Should allow initial value (also referred as default value) to be set
9. ? Should support text/number formatting,

Its expected props are, but not limited to -
#### `type: string`
    whether it is 'text', 'number' or 'radio' etc.
#### `default: string & number`
    should be according to type; a string, number etc.
#### `disabled: boolean`
    to disable it
#### `format?: Function`
    format the input in input box
#### `handleSave?: Function`
    function provided by consumer component, to customise saving behaviour.


## 2. Select
It will serve as replacement for HTML `select` tag.

Its expected behavior is outlined as below -

1. Initial value should be null,
2. Should ensure to be controlled component,
3. Wrapper shouldn't have local state,
4. Should blur when user blurs, same for focus,
5. Should have disabled as option,
6. Should have option to clear selected value,
7. Should set its value to null if the box is cleared,
8. Should allow initial value (also referred as default value) to be set,
9. Default should be in the format of array containing objects. This default value should have value and label as mandatory keys,
10. Should disappear on outside click,

## 3. Async Select
It should be able to fetch data from API provider and display according to query from user in entered in input box.

Its expected props is outlined as below -

### 1. `fetchData: Function ` 
    a function  that returns data in format of `[...,{ label: string, value: string}, ...]`
### 2. `default? Object`  
    an object in the form of  `{label: string, value: string}`. It sets the default value.
### 3. `disabled: boolean`
    Disables it!
### 4. `label?: string`
    Sets label to the input, on top of it.
### 5. `noLabel?: boolean`
    Removes label, even if label prop is passed.`
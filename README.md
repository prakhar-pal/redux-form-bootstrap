# Introduction
This doc details the plan to build reusable [React](https://reactjs.org) components for HTML `form` that can be used with [redux-form](https://redux-form.com), difference being that all changes will be captured in these wrapper components and updated in redux state via redux-form.

Dependecies are listed as below -
* react
* redux-form
* reactstrap (optional, meaning other styles can also be used)
* classnames
  
# Components

These components will have some common props and respective similar behaviour in regards to how they are used. These props are listed as below -
#### `label?: any`  
    refers to valid JSX that appears on top of the respective form field.
#### `noLabel?: boolean` 
    whether to show label, the string prop. It is a master check, meaning even if label is present, if noLabel is defined then that behaviour will take precedence.
#### `filter?: Function`
    function to be provided by consumer component, to dictate saving behaviour.
#### `onSave?: Function`
    informs the consumer component when the value in store changes.
#### `outermostClass?: string`
    a string, consisting of CSS classes separated by space.
#### `fieldClass?: string`
     a string, consisting of CSS classes separated by space.
#### `disabled?: boolean`
    to disallow change in current form field.

## 1. Input
It will serve as replacement for HTML `input` tag.
    
Its expected behavior is outlined as below -

1. Initial value should empty string i.e. '',
2. Should ensure to be controlled component,
3. Wrapper shouldn't have local state,
4. Should blur when user blurs, same for focus,
5. Should have disabled as option,
6. Should be set to '' if the box is cleared,
7. Should allow initial value (also referred as default value) to be set
8. ? Should support text/number formatting,

Its expected props are, but not limited to -
#### `type: string`
    whether it is 'text', 'number' or 'radio' etc.
#### `default: string & number`
    should be according to type; a string, number etc.
#### `format?: Function`
    format the input in input box


## 2. Select
It will serve as replacement for HTML `select` tag.

Its expected behavior is outlined as below -

1. Initial value should be null,
2. Should ensure to be controlled component,
3. Wrapper shouldn't have local state,
4. Should have disabled as option,
5. Should have option to clear selected value,
6. Should allow initial value (also referred as default value) to be set,
7. Default should be in the format of array containing objects. This default value should have value and label as mandatory keys,
8.  Should close the drop down when user clicks outside of it

It's expected props are as described - 

#### `options: []{label: string, value: string}`
    array of  objects, each of which is has label, value as fiedls.
#### `default: {label: string, value: string}`
    an object containing keys named label and value

## 3. Async Select
It should be able to fetch data from API provider and display according to query from user that is entered in input box.

1. Should only process data from fetchData, when result is an array of Objects, each of which has label and key as its properties,
2. Should allow clearing selected value,
3. Should allow, optionally, a default value to be set,
4. It's initial value or after clearing it, should be null,

Its expected props is outlined as below -

#### `fetchData: Function ` 
    a function  that returns data in format of `[...,{ label: string, value: string}, ...]`
#### `default?: Object`  
    an object in the form of  `{label: string, value: string}`. It sets the default value.
#### `isClearable?: boolean`
    To allow clearing selected value, it defaults to true.

## 4. TextArea

It will serve as replacement for HTML `textarea` tag.

Its expected props is outlined as below -

#### `default?: string`
    an string, that is used as default value for textarea.
#### `isClearable?: boolean`
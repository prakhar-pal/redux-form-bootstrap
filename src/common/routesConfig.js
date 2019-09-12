import React from 'react';
import { Redirect } from 'react-router-dom';
import InputExamples  from '../components/InputExamples'; 
import DropdownExamples  from '../components/DropdownExamples'; 
export default  [
    {
        path: '/',
        render: ()=> <Redirect to='/input'/>,
        exact: true
    },
    {
        path: '/input',
        component: InputExamples
    },
    {
        path: '/dropdown',
        component: DropdownExamples
    }
]
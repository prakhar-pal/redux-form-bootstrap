import React from 'react';
import { Redirect } from 'react-router-dom';
import InputExamples  from '../components/InputExamples'; 
import DropdownExamples  from '../components/DropdownExamples'; 
import MiscExamples from '../components/MiscExamples';
export default  [
    {
        path: '/',
        render: ()=> <Redirect to='/misc'/>,
        exact: true
    },
    {
        path: '/input',
        component: InputExamples
    },
    {
        path: '/dropdown',
        component: DropdownExamples
    },
    {
        path: '/misc',
        component: MiscExamples
    }
]
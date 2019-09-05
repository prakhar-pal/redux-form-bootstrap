import * as React from 'react';
export class Input extends React.Component{
    render(){
        return (
            <div>
                Enter something: <input value={'This is some value'}/>
            </div>
        )
    }
}
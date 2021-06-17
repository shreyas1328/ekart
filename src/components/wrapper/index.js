import React from 'react';
import Header from './header';

export default function Wrapper(props) {
    return (
        <div className="wrapper-container" >
            <Header  />
            {props.children}
        </div>
    )
}

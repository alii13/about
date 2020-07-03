import React from 'react';
import Hero from './hero';
import Coders from './Coders';
import Designer from './Designer';
import Writers from './Writers';

function Content() {
    return (
        <div className="p-4">
            <Hero/>
            <Coders/>
            <Designer/>
            <Writers/>
        </div>
    )
}

export default Content

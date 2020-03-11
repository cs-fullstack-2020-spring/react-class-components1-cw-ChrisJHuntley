import React from 'react';
function SayHello(prop) {
    return (
        <div>
            <h2>Well Howdy</h2>
            <p>{prop.say_something}</p>
        </div>
    );
}

export default SayHello
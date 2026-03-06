import React from 'react'


function Switch() {

    const [isOn, setIsOn] = React.useState(false);
    const [personas, setPersonas] = React.useState(4




    );

    return (
        <div>
            <p>light is {isOn ? 'on' : 'off'}</p>
            <button onClick={() => setIsOn(!isOn)}>switch</button>
            <p>there{personas === 1 ? ' is' : ' are'} {personas} {personas === 1 ? 'person' : 'persons'} </p>






        </div>
    )
}

export default Switch
import React from 'react'

function Inputcontrol() {
    const [name, setName] = React.useState("leonardo");

    return (
        <>
            <div>Inputcontrol</div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <p>{name}</p>
            <button onClick={() => setName("")}>delete</button>

        </>
    )
}

export default Inputcontrol
import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(10);


    return (
        <>
            <div>Counter</div>xs
            <input type="number" value={count} onChange={e => setCount(e.target.value)} />
            <button onClick={() => setCount(count - 3)}>subtract</button>
            <button onClick={() => setCount(count + 1)}>add</button>
            <p>{count}</p>


        </>

    )
}

export default Counter
import React from 'react'

export default function Calculate() {

    const [amount, setAmount] = React.useState(0);
    const [tax, setTax] = React.useState(0.19);
    return (
        <>
            <div>Calculate</div>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            <p>{amount}</p>
            <br />
            <input type="number" value={tax} onChange={e => setTax(e.target.value)} />

            <p>{tax}</p>

            <p>total:{(amount * (1 + tax)).toFixed(3)} $COP</p>

        </>
    )
}

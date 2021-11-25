import React, {useState} from 'react'

const App = () =>
{
const [value, setValue] = useState(10);

const setToValue = (newValue) => () => {
    setValue(newValue)
}
return (
    <div>
        {value}
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(10)}>ten</button>
        <button onClick={setToValue(value+1)}>increase by 1</button>

    </div>
)
 }

export default App
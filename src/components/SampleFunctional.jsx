import { React, useEffect, useState } from 'react';
import axios from 'axios';

const SampleFunctional = () => {
    // define hooks with state variables and set state methods with initial value for state variable
    const [count, updateCount] = useState(0);
    const [textDisplay, updateTextDisplay] = useState("Type Anything");
    const [fetchedUsers, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    let fetchData = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data);
    }
    return (
        <>
            <h1>Sample Functional</h1>
            <p>Current Count : {count}</p>
            <button onClick={() => updateCount(count + 1)}>Add 1</button>
            <br />
            <input type="text" onChange={(e) => updateTextDisplay(e.target.value)} />
            <p>{textDisplay}</p>
            <div>
                {
                    fetchedUsers.map((el) => {
                        return <p key={el.id}>{el.name}</p>
                    })
                }
            </div>
        </>
    );
}

export default SampleFunctional;
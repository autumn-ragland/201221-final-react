import { React, useEffect, useState } from 'react'; // import multiple required dependencies from react
import axios from 'axios'; // import axios to preform fetch

const SampleFunctional = () => {
    // define hooks with state variables and set state methods with initial value for state variable
    const [count, updateCount] = useState(0);
    const [textDisplay, updateTextDisplay] = useState("Type Anything");
    const [fetchedUsers, setUsers] = useState([]);

    // lifecycle hook with included 2nd parameter to rerun hook only if list changes
    useEffect(() => {
        // call async method to fetch data from API
        fetchData();
    }, [])

    // declare async method to fetch data and update state
    let fetchData = async () => {
        // deconstruct response to return the data property
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        // update state
        setUsers(data);
    }
    // render
    return (
        <>
            <h1>Sample Functional</h1>
            {/* display value of count (stateful var) */}
            <p>Current Count : {count}</p>
            {/* button with event listener to update state */}
            <button onClick={() => updateCount(count + 1)}>Add 1</button>
            <br />
            {/* text box with event listener to update state */}
            <input type="text" onChange={(e) => updateTextDisplay(e.target.value)} />
            {/* display the value of textDisplay (stateful var) */}
            <p>{textDisplay}</p>
            {/* iterate through data returned from fetch */}
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
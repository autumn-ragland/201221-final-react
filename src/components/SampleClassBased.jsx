import {React, Component} from 'react';
import axios from 'axios';

class SampleClassBased extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            data : [],
            inputText : "Anything"
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData = async() => {
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({data : data});
    }
    
    render(){
        return(
            <>
            <h1>Sample Class Based</h1>
            <p>Current Count : {this.state.count}</p>
            <button onClick = {() => this.setState({count : this.state.count + 1})}>Add 1</button>
            <br/>
            <input type="text" onChange = {(e) => this.setState({inputText : e.target.value})}/>
            <p>{this.state.inputText}</p>
            {
                this.state.data.map((el, idx) => {
                    return <p key = {idx}>{el.name}</p>
                })
            }
            </>
        )
    }
}

export default SampleClassBased;
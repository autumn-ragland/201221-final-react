import {React, Component} from 'react';
import axios from 'axios';

class SampleClassBased extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
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
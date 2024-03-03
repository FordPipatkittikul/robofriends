import React, {Component} from 'react';
import CardList from "../components/CardList.js";
// import {robots} from './robots.js'; // not export default only export
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import './App.css'

// smart component
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()
        }).then((users) =>{
            this.setState({'robots': users})
        })
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value})
        // console.log(this.state.searchfield)
    }

    render(){
        const filterRobots = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className='tc'>Loading</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
        }
    }

}

export default App
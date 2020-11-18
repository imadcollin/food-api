import React, { Component } from 'react'
import axios from "axios"
export default class DataProvider extends Component {
	state={
		foodList:[]
	}
	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=> {
			const data= res.data; 
			this.setState({
				foodList: [this.state.foodList, ...data]
			});
		})
	}
	render() {
		return (
			<div>
				{console.log(this.state.foodList)}
			</div>
		)
	}
}

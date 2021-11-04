import React, { Component } from 'react'

class Card extends Component {
    
    state={
        value:"",
        data:null
    }    

    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    fetchData=()=>{
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=lahore&appid=6b224d1a7699783d8e3220093ef75d76&units=metric`)
        .then(res=>res.json())
        .then(newdata=>this.setState({data:newdata}))
    }
render(){
console.log(this.state)
return(
<div>
    <h1>My Weather App</h1>
    <input type="text" onChange={this.handleChange}/>
    <button onClick={this.fetchData}>Search</button>
</div>
)
}
}

export default Card

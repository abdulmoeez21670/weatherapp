import React, { Component } from 'react'
import Card from "../components/card"
import "../components/file.css"
import Card2 from "./card2"
export default class App extends Component {
    render() {
        return (
            <div>
                <Card/>
                <Card2/>
            </div>
        )
    }
}

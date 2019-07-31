import React, { Component } from 'react'

export default class Part extends Component {
    render() {
        return (
            <div>
                <div> {this.props.content.name} {this.props.content.exercises} </div>
            </div>
        )
    }
}

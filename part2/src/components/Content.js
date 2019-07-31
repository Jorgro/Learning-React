import React, { Component } from 'react'
import Part from './Part'

export default class Content extends Component {
    render() {
        return (
            <div>
                {this.props.content.map(part => <Part content={part} key={part.id} />)}
            </div>
        )
    }
}

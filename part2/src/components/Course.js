import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'

export default class Course extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div>
                    <Header name={this.props.course.name} />
                    <Content content={this.props.course.parts} />
                </div>
                <div>
                    <b>
                        total of {this.props.course.parts.map(part => part.exercises).reduce((sum, other) => sum + other)} exercises
                  </b>
                </div>
            </>
        )
    }
}


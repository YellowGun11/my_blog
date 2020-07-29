import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.name}
            </div>
        )
    }
}

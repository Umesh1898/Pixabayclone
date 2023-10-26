

import  { Component } from 'react'

export default class ClassComponenets extends Component {
  render() {
    return (
      <div>
        <h1>Mera Nam{this.props.name} and meri umar {this.props.age}</h1>
      </div>
    )
  }
}

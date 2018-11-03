import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = ''
    if (this.props.users.length > 0) {
      users = this.props.users.map(user => {
        return <li>{user.username}</li>
      })
    } else {
      users = <div></div>
    }
    return (
      <div>
        <ul>
          {users}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return  state
}


export default connect(mapStateToProps)(Users)

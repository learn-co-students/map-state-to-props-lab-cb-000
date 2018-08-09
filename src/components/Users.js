import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  displayUsers = () => this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
  render() {
    return (
      <div>
        <ul>
          {this.displayUsers()}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users
  }
}


export default connect(mapStateToProps)(Users)

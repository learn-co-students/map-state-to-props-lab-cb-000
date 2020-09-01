import React, { Component } from 'react';


import { connect } from 'react-redux'



class Users extends Component {

  render() {
    
    const users = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    });
    
    return (
      <div>

              {this.props.userCount}


        <ul>
        
          {users}
          
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  };
}


// connect this component to Redux
export default connect(mapStateToProps)(Users);

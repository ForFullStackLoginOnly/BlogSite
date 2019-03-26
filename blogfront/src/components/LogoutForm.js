import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/currentUserReducer'


class LogoutForm extends React.Component {
  constructor(props) {
    super(props)
  }


  logoutHadnler = async (event) => {
    event.preventDefault()
    try {
      window.localStorage.removeItem('loggedUser')
      await this.props.logout()
    } catch (exception) {
      console.log(exception)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.logoutHadnler}>
          <button>logout</button>
        </form>
      </div>
    )
  }
}


export default connect(
  null,
  { logout }
)(LogoutForm)

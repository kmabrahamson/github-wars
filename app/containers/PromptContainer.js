import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
  //es6 for setInitialState
  constructor() {
    super();
    this.state = {
      username: ''
    };
    //es6 pattern for binding 'this' to callback
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }
  render() {
    return (
      <Prompt onSubmitUser={this.handleSubmitUser} onUpdateUser={this.handleUpdateUser} header={this.props.route.header} username={this.state.username} />
    );
  }
}
//PropTypes are called on the class in es6
PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer;
